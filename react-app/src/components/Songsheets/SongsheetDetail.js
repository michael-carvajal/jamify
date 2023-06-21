import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import './songsheets.css'
import OpenModalButton from "../OpenModalButton"
import AllSetlist from "../Tables/Setlists"
import { useEffect } from "react"
import { fetchAllUsers } from "../../store/session"
export default function SongsheetDetail() {
    const { songsheets } = useSelector(state => state)
    const { session } = useSelector(state => state)
    const { setlists } = useSelector(state => state)
    const { songId } = useParams()
    const { Songsheets, Artists } = songsheets
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('right before dispatch===========>');
        dispatch(fetchAllUsers())
        console.log('right after dispatch===========>');
    }, [dispatch])
    if (!Songsheets || !setlists || !session) {
        return <div>Loading...</div>
    }
    // const songsheetsArray = Object.values(Songsheets)
    const songsheet = Songsheets[songId]
    const authorName = session.allUsers.users.find(user => user.id === songsheet.author_id).username
    console.log(authorName);
    const artist = Artists[songsheet.artist_id]
    const songSetlists = Object.values(setlists?.Setlist_items).filter(list => list.songsheet_id === parseInt(songId) )
    // console.log("this is the bdy  =========>", songSetlists);
    return (
        <div id="songsheet-detail">
            <div className="songsheet-header">

                <p id="title-artist">{songsheet.title} by <span style={{fontWeight: "600"}}>{artist.name}</span></p>
            <p>Added to {songSetlists.length} Setlists</p>
            </div>
            <OpenModalButton type="add-to-setlist" modalComponent={<AllSetlist type="add" songId={songsheet.id} />} />
            <p>Created by {authorName}, last editted on {songsheet.updated_at.split(" ").slice(0, 3).join(" ")}</p>
            <p>Key {songsheet.key}</p>
            <pre>{songsheet.body}</pre>
        </div>
    )
}
