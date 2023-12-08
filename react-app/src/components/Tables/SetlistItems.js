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
        <div >
                    <h1 >{setlist.name} Setlist Detials</h1>
            <div className="grid grid-cols-3  p-2">
                <div>SONG</div>
                <div>ARTIST</div>
                <div>GENRE</div>
                {songs.map((song, index) => (
                    <React.Fragment key={`list-item-list-${index}`}>
                        <div className="border-t p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap">
                            <NavLink to={`/songsheet-detail/${song.song.id}`} className="select-link">
                                {song.song.title}
                            </NavLink>
                        </div>
                        <div className="border-t p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap">{song.artist.name}</div>
                        <div className="border-t p-2 pl-0 overflow-hidden overflow-ellipsis whitespace-nowrap">{song.genre.name}</div>
                    </React.Fragment>
                ))}
            </div>

        </div>
    );

}
