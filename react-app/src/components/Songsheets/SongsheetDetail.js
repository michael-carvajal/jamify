import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './songsheets.css';
import OpenModalButton from "../OpenModalButton";
import AllSetlist from "../Tables/Setlists";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../store/session";
import SongsheetRatings from "./SongsheetRating";

export default function SongsheetDetail() {
    const { songsheets } = useSelector((state) => state);
    const { session } = useSelector((state) => state);
    const { setlists } = useSelector((state) => state);
    const { songId } = useParams();
    const { Songsheets, Artists } = songsheets;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false); // Set loading status to false after one second
        }, 500);

        dispatch(fetchAllUsers());

        return () => clearTimeout(loadingTimeout); // Clear the timeout on unmounting
    }, [dispatch]);

    if (isLoading || !Songsheets || !setlists.Setlist_items || !session) {
        return (
            <div className="loading-container">

                <img src="/les-paul.svg" alt="spinning guitar" id="guitar-spin" />
            </div>
        );
    }

    const songsheet = Songsheets[songId];
    const authorName =
        session?.allUsers?.users.find((user) => user.id === songsheet.author_id)
            ?.username || null;
    const artist = Artists[songsheet.artist_id];
    const songSetlists =
        Object.values(setlists?.Setlist_items).filter(
            (list) => list.songsheet_id === parseInt(songId)
        ) || [];

    return (
        <div id="songsheet-detail">
            <div className="songsheet-header">
                <p id="title-artist">
                    {songsheet.title} by <span style={{ fontWeight: "600" }}>{artist.name}</span>
                </p>
                <p>Added to {songSetlists.length} { songSetlists.length === 1 ? "Setlist" : "Setlists"}</p>
            </div>
            <OpenModalButton
                type="add-to-setlist"
                modalComponent={<AllSetlist type="add" songId={songsheet.id} />}
            />
            <p>
                Created by {authorName}, last edited on {songsheet.updated_at.split(" ").slice(0, 3).join(" ")}
            </p>
            <p>Key {songsheet.key}</p>
            <pre>{songsheet.body}</pre>
             <SongsheetRatings />
        </div>
    );
}
