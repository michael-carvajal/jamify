import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatings } from "../../store/ratings";
import OpenModalButton from "../OpenModalButton";
import DeleteRatingModal from "./DeleteRatingModal";
import generateStars from "./StarsSVG";
import { NavLink } from "react-router-dom/";

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
        <div className="flex flex-col w-full p-2 gap-10">

            <h1 className="self-end text-xl md:text-2xl font-bold">My Ratings</h1>
            <div className="flex flex-col gap-10">
                {userRatings.map((rating, index) => {
                    const songRated = songsheets?.Songsheets[rating.songsheet_id];
                    const wholeRating = Math.floor(rating.rating)
                    console.log(songRated);
                    return (
                        <div className="bg-ug-grey p-2 rounded text-white flex flex-col w-full" key={`ratings-key-${index}`}>
                            <p className="text-sm font-light">{rating.comment}</p>
                            {/* <p>{rating.rating}</p> */}
                            <div className="flex items-center gap-1 justify-between w-fit">
                                {generateStars(wholeRating)}
                            </div>
                            <NavLink className='self-end' to={`/songsheet-detail/${songRated.id}`}>
                                <p className=" underline cursor-pointer text-modal-background font-bold hover:text-ug-yellow">{songRated.title}</p>
                            </NavLink>
                            <div className="self-end flex gap-8 items-baseline">
                                <span>Edit</span>
                                <OpenModalButton
                                    type="delete-rating"
                                    modalComponent={<DeleteRatingModal ratingId={rating.id} />}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
