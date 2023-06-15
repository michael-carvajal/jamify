import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import './songsheets.css'
export default function SongsheetDetail() {
    const { songsheets } = useSelector(state => state)
    const { songId } = useParams()
    const { Songsheets, Artists, Albums } = songsheets
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>
    }
    // const songsheetsArray = Object.values(Songsheets)
    const songsheet = Songsheets[songId]
    const artist = Artists[songsheet.artist_id]
    // console.log("this is the bdy  =========>", songsheet.body);
    return (
        <div id="songsheet-detail">
            <h1>{songsheet.title} by {artist.name}</h1>
            <p>Added to 15 Setlists</p>
            <p>Key {songsheet.key}</p>
            <p>Author (have to find the author) last edit on { songsheet.updated_at}</p>
            <pre>{songsheet.body}</pre>
        </div>
    )
}
