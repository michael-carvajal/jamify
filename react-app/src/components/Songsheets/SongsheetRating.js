import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatings } from "../../store/ratings";
import OpenModalButton from "../OpenModalButton";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DeleteRatingModal from "../Reviews/DeleteRatingModal";
import ReviewForm from "../Reviews/ReviewForm";

export default function SongsheetRatings() {
    const { session } = useSelector(state => state);
    const { ratings } = useSelector(state => state);
    const dispatch = useDispatch();
    const { songId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [editRatingId, setEditRatingId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchRatings());
            setIsLoading(false);
        };
        fetchData();
    }, [dispatch]);

    if (isLoading || !ratings) {
        return <h2>Loading...</h2>;
    }

    const songsheetRatings = Object.values(ratings).filter(
        rating => rating.songsheet_id === parseInt(songId)
    );
    const isReviewed = songsheetRatings.find(
        rating => rating.author_id === session.user?.id
    );

    const handleEditRating = (ratingId) => {
        setEditRatingId(ratingId);
    };

    const handleCancelEdit = () => {
        setEditRatingId(null);
    };

    return (
        <>
            <h1>Songsheet Ratings</h1>
            {session.user && !isReviewed && (
                <ReviewForm songsheet_id={parseInt(songId)} author_id={session.user?.id} />
            )}
            <div className="user-ratings">
                {songsheetRatings.map((rating, ind) => {
                    const author = session.allUsers.users.find(
                        user => rating.author_id === user.id
                    );
                    const isEditing = rating.id === editRatingId;

                    return (
                        <div key={`songsheet-rating-idx-${ind}`} className="user-rate">
                            {isEditing ? (
                                <ReviewForm
                                    songsheet_id={parseInt(songId)}
                                    author_id={session.user?.id}
                                    editRating={rating.rating}
                                    editComment={rating.comment}
                                    onCancel={handleCancelEdit}
                                />
                            ) : (
                                <>
                                    <p>{rating.comment}</p>
                                    <p>
                                        {rating.rating}
                                        <i className="fa fa-star"></i>
                                    </p>
                                    <p>Written by: {author.username}</p>

                                    {session.user?.id === rating.author_id && (
                                        <div className="delete-edit">
                                            <button onClick={() => handleEditRating(rating.id)}>
                                                Edit
                                            </button>

                                            <OpenModalButton
                                                type="delete-rating"
                                                modalComponent={<DeleteRatingModal ratingId={rating.id} />}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    );
                }).reverse()}
            </div>
        </>
    );
}
