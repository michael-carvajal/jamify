import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import './songsheets.css'
import OpenModalButton from "../OpenModalButton"
import AllSetlist from "../Tables/Setlists"
export default function SongsheetDetail() {
    const { songsheets } = useSelector(state => state)
    const { songId } = useParams()
    const { Songsheets, Artists } = songsheets
    if (!Songsheets) {
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
            <OpenModalButton type="add-to-setlist" modalComponent={<AllSetlist type="add" songId={songsheet.id} />} />
            <p>Key {songsheet.key}</p>
            <p>Author (have to find the author) last edit on {songsheet.updated_at}</p>
            <pre>{songsheet.body}</pre>
        </div>
    )
}
