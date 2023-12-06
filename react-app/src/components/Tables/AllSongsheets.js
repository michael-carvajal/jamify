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
                    <h2 className="text-xs md:text-base">ARTISTS</h2>
                    {songMapper.map((song, index) => {
                        const artistId = song.artist_id;
                        return (
                            <div className="border-t text-xs md:text-base p-2 overflow-hidden overflow-ellipsis whitespace-nowrap" key={`artist-${index}`}>
                                {Artists[artistId].name}
                            </div>
                        );
                    })}
                </div>
                <div className="col-span-1 flex-grow">
                    <h2 className="text-xs md:text-base">SONG</h2>
                    {songMapper.map((song, index) => (
                        <div className="border-t text-xs md:text-base p-2 overflow-hidden overflow-ellipsis whitespace-nowrap" key={`song-${index}`}>
                            <NavLink to={`/songsheet-detail/${song.id}`} className="select-link">
                                {song.title}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="col-span-1">
                    <h2 className="text-xs md:text-base">RATING</h2>
                    {songMapper.map((_, index) => (
                        <div className="border-t text-xs md:text-base p-2" key={`rating-${index}`}>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    ))}
                </div>
                <div className={`col-span-1 ${type === "user" && "hidden"}`}>
                    <h2 className="text-xs md:text-base ">LIKES</h2>
                    {songMapper.map((_, index) => (
                        <div className="border-t text-xs md:text-base p-2" key={`likes-${index}`}>
                            50
                        </div>
                    ))}
                </div>
                {type === "user" && (
                    <div className="col-span-1">
                        <h2 className="text-xs md:text-base">Action</h2>
                        {songMapper.map((song, index) => (
                            <div className="border-t text-xs md:text-base p-2" key={`action-${index}`}>
                                <div className="flex items-center">
                                    <OpenModalButton
                                        type="delete-songsheet"
                                        modalComponent={<DeleteSongsheetModal sheetId={song.id} songName={song.title} />}
                                    />
                                    <NavLink to={`/publish/${song.id}`} className="ml-2">
                                        <i className="fa fa-pencil"></i>
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
