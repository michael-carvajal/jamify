import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postSongsheet } from "../../store/songsheets";

export default function PublishSongsheet() {
    const sessionUser = useSelector(state => state.session.user);
    const [album_id, setAlbum_id] = useState(0)
    const [artist_id, setArtist_id] = useState(0)
    // const [author_id, setAuthor_id] = useState(0)
    const [body, setBody] = useState("")
    const [key, setKey] = useState("")
    const [song_name, setSong_name] = useState("")
    const [title, setTitle] = useState("")
    const [version, setVersion] = useState(1)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newSongsheet = {
            album_id,
            artist_id,
            author_id: sessionUser.id,
            body,
            key,
            song_name,
            title,
            version

        }
        dispatch(postSongsheet(newSongsheet))
    }
    return (
        <div className="publish-songsheet">
            <form onSubmit={handleSubmit}>
                <label>Album</label>
                <input value={album_id} onChange={e => setAlbum_id(e.target.value)}/>
                <label>Artist</label>
                <input value={artist_id} onChange={e => setArtist_id(e.target.value)}/>

                <label>body</label>
                <textarea value={body} onChange={e => setBody(e.target.value)} />
                <label>Key</label>
                <input value={key} onChange={e => setKey(e.target.value)}/>
                <label>Song name</label>
                <input value={song_name} onChange={e => setSong_name(e.target.value)}/>
                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
                <label>Version</label>
                <input value={version} onChange={e => setVersion(e.target.value)} type="number"/>
                <button>Create Songsheet</button>
            </form>
        </div>
    )
}
