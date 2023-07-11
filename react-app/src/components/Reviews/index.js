import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatings } from "../../store/ratings";
import OpenModalButton from "../OpenModalButton";
import DeleteRatingModal from "./DeleteRatingModal";
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
        <>
            <h1>My Ratings</h1>
            <div className="user-ratings">
                {userRatings.map(rating => {
                    const songRated = songsheets?.Songsheets[rating.songsheet_id];
                    return (
                        <div className="user-rate">
                            <p>{rating.comment}</p>
                            <p>{rating.rating}</p>
                            <p>{songRated.title}</p>
                            <span>Edit</span>
                            <OpenModalButton
                                type="delete-rating"
                                modalComponent={<DeleteRatingModal ratingId={rating.id} />}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
