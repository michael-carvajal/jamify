import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function SetlistItems() {
    const { listId } = useParams()
    const { setlists } = useSelector(state => state)
    const { songsheets } = useSelector(state => state)
    const { Setlists, Setlist_items } = setlists;
    const {Songsheets, Artists, Genres} = songsheets
    if (!Setlists || !Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const setlist = Setlists[listId]
    const listItems = Object.values(Setlist_items);
    const items = listItems.filter(list => list.setlist_id === parseInt(listId))
    const songs = items.map(item => {
        return {
            song: Songsheets[item.songsheet_id],
            artist : Artists[Songsheets[item.songsheet_id].artist_id],
            genre : Genres[Songsheets[item.songsheet_id].genre_id],
        }
    })

    console.log(songs);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ARTIST</th>
                        <th>SONG</th>
                        <th>GENRE</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => {
                        return (
                            <tr key={`list-item-list-${index}`}>
                                <th>{song.artist.name}</th>
                                <th>{song.song.title}</th>
                                <th>{song.genre.name}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}
