import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatings } from "../../store/ratings";
import OpenModalButton from "../OpenModalButton";
import DeleteRatingModal from "./DeleteRatingModal";
import generateStars from "./StarsSVG";
export default function Reviews() {
    const { session } = useSelector(state => state);
    const { ratings } = useSelector(state => state);
    const { songsheets } = useSelector(state => state);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchRatings());
            setIsLoading(false);
        };
        fetchData();
    }, [dispatch]);
    if (!session.user) {
        return <h2>Login to create Ratings!</h2>;
    }
    if (isLoading || !ratings || !songsheets) {
        return <h2>Loading...</h2>;
    }
    const userRatings = Object.values(ratings).filter(rating => rating.author_id === session.user?.id);

    return (
        <div>

            <h1>My Ratings</h1>
            <div className="user-ratings">
                {userRatings.map((rating, index) => {
                    const songRated = songsheets?.Songsheets[rating.songsheet_id];
                    const wholeRating = Math.floor(rating.rating)

                    return (
                        <div className="user-rate" key={`ratings-key-${index}`}>
                            <p>{rating.comment}</p>
                            <p>{rating.rating}</p>
                            <p>{songRated.title}</p>
                            <div className="flex items-center">
                                {generateStars(wholeRating)}
                            </div>
                            <span>Edit</span>
                            <OpenModalButton
                                type="delete-rating"
                                modalComponent={<DeleteRatingModal ratingId={rating.id} />}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
