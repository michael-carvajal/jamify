import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom/cjs/react-router-dom.min";

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
        <div id="table-container" className="all-setlists">
            <table className="table">
                <thead>
                    <h1 >{setlist.name} Setlist Detials</h1>
                    <tr>
                        <th>SONG</th>
                        <th>ARTIST</th>
                        <th>GENRE</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => {
                        return (
                            <tr key={`list-item-list-${index}`}>
                                <td><NavLink to={`/songsheet-detail/${song.song.id}`} className="select-link">{song.song.title}</NavLink></td>
                                <td>{song.artist.name}</td>

                                <td>{song.genre.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}
