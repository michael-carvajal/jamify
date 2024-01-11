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
        <div>
            <div className="grid grid-cols-4 p-2">
                <div className="col-span-4">
                    <h1 className="text-xl md:text-3xl mb-10 font-bold text-right">{type === "user" ? "My Songsheets" : "Explore our Catalog"}</h1>
                </div>
                <div className="col-span-1">
                    <h2 className="table-head-color font-bold text-xs md:text-base">ARTISTS</h2>
                    {songMapper.map((song, index) => {
                        const artistId = song.artist_id;
                        return (
                            <div className="border-t text-xs md:text-base p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap" key={`artist-${index}`}>
                                {Artists[artistId].name}
                            </div>
                        );
                    })}
                </div>
                <div className="col-span-1 flex-grow">
                    <h2 className="table-head-color font-bold text-xs md:text-base">SONG</h2>
                    {songMapper.map((song, index) => (
                        <div className="border-t text-xs md:text-base p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap" key={`song-${index}`}>
                            <NavLink to={`/songsheet-detail/${song.id}`} className="select-link">
                                {song.title}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="col-span-1">
                    <h2 className="table-head-color font-bold text-xs md:text-base">RATING</h2>
                    {songMapper.map((_, index) => (
                        <div className="border-t text-xs md:text-base p-2 pl-0" key={`rating-${index}`}>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    ))}
                </div>
                <div className={`col-span-1 ${type === "user" && "hidden"}`}>
                    <h2 className="table-head-color font-bold text-xs md:text-base ">LIKES</h2>
                    {songMapper.map((_, index) => (
                        <div className="border-t text-xs md:text-base p-2 pl-0" key={`likes-${index}`}>
                            50
                        </div>
                    ))}
                </div>
                {type === "user" && (
                    <div className="col-span-1">
                        <h2 className="table-head-color font-bold text-xs md:text-base">ACTION</h2>
                        {songMapper.map((song, index) => (
                            <div className="border-t text-xs md:text-base p-2 pl-0" key={`action-${index}`}>
                                <div className="flex gap-5">
                                    <OpenModalButton
                                        type="delete-songsheet"
                                        modalComponent={<DeleteSongsheetModal sheetId={song.id} songName={song.title} />}
                                    />
                                    <NavLink to={`/publish/${song.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-6 h-4 md:h-6 hover:text-ug-yellow cursor-pointer">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>

                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>


        </div>
    );
}
