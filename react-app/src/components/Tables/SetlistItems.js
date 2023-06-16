import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function SetlistItems() {
    const { listId } = useParams()
    const { setlists } = useSelector(state => state)
    const { songsheets } = useSelector(state => state)
    const { Setlists, Setlist_items } = setlists;
    const {Songsheets} = songsheets
    if (!Setlists) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const setlist = Setlists[listId]
    const listItems = Object.values(Setlist_items);
    const items = listItems.filter(list => list.setlist_id === parseInt(listId))
    const songs = items.filter(item => {
        console.log(item);
        console.log(Songsheets[item.songsheet_id]);
        return item
    })

    console.log(songs);
    return (
        <div>
            Setlist details
        </div>
    )

}
