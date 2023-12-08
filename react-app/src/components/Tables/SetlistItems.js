import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
export default function SetlistItems() {
    const { listId } = useParams()
    const { setlists } = useSelector(state => state)
    const { songsheets } = useSelector(state => state)
    const { Setlists, Setlist_items } = setlists;
    const { Songsheets, Artists, Genres } = songsheets
    if (!Setlists || !Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>


        </div>;
    }
    const setlist = Setlists[listId]
    const listItems = Object.values(Setlist_items);
    const items = listItems.filter(list => list.setlist_id === parseInt(listId))
    const songs = items.map(item => {
        return {
            song: Songsheets[item.songsheet_id],
            artist: Artists[Songsheets[item.songsheet_id].artist_id],
            genre: Genres[Songsheets[item.songsheet_id].genre_id],
        }
    })
    return (
        <div className="w-full p-2">
            <h1 className="text-xl md:text-3xl mb-10 font-bold text-right" >"{setlist.name}" Setlist Detials</h1>
            <div className="grid grid-cols-3  p-2 relative">
                <div className="table-head-color font-bold text-xs md:text-base">SONG</div>
                <div className="table-head-color font-bold text-xs md:text-base">ARTIST</div>
                <div className="table-head-color font-bold text-xs md:text-base">GENRE</div>
                {songs.length === 0 && (
                    <NavLink to='/songsheets'>
                        <h3 className="absolute">Click here to add songs to this set list!</h3>
                    </NavLink>
                )}
                {songs.map((song, index) => (
                    <React.Fragment key={`list-item-list-${index}`}>
                        <div className="border-t text-xs md:text-base p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
                            <NavLink to={`/songsheet-detail/${song.song.id}`} className="select-link">
                                {song.song.title}
                            </NavLink>
                        </div>
                        <div className="border-t text-xs md:text-base p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap">{song.artist.name}</div>
                        <div className="border-t text-xs md:text-base p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap">{song.genre.name}</div>
                    </React.Fragment>
                ))}
            </div>

        </div>
    );

}
