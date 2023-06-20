import { useSelector } from "react-redux";
import './Tables.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import OpenModalButton from "../OpenModalButton";
import DeleteSongsheetModal from "../User/DeleteSongsheetModal";

export default function AllSongsheets({ type, userSongsheets }) {
    const { songsheets } = useSelector(state => state);
    // const sessionUser = useSelector(state => state.session.user);
    const { Songsheets, Artists } = songsheets;
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const songsheetsArray = Object.values(Songsheets);

    const songMapper = type === "user" ? userSongsheets : songsheetsArray;
    return (
        <div id="table-container">
            <table className="songsheets-table">
                <thead>
                    <tr>
                        <th>ARTISTS</th>
                        <th>SONG</th>
                        <th>RATING</th>
                        <th>LIKES</th>
                    </tr>
                </thead>
                <tbody>
                    {songMapper.map((song, index) => {
                        const artistId = song.artist_id;
                        return (
                            <tr className="table-row" key={`song-list-${index}`}>
                                <td>{Artists[artistId].name}</td>
                                <td>
                                    <NavLink to={`/songsheet-detail/${song.id}`} className="select-link">{song.title}</NavLink>
                                </td>
                                <td>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </td>
                                <td>50</td>
                                {type === "user" ? (
                                    <td className="delete-stock">
                                        <OpenModalButton
                                            type="delete-songsheet"
                                            modalComponent={<DeleteSongsheetModal sheetId={song.id} />}
                                        />
                                        <NavLink to={`/publish/${song.id}`}><i className="fa fa-pen"></i></NavLink>
                                    </td>
                                ) : null}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
