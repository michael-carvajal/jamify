import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postSongsheet } from "../../store/songsheets";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function PublishSongsheet() {
    const { songsheets } = useSelector(state => state);
    const sessionUser = useSelector(state => state.session.user);
    const { Songsheets, Artists, Albums } = songsheets;
    const [album_id, setAlbum_id] = useState("")
    const [artist_id, setArtist_id] = useState("")
    const [body, setBody] = useState("")
    const [key, setKey] = useState("")
    // const [song_name, setSong_name] = useState("")
    const [title, setTitle] = useState("")
    const history = useHistory()
    // const [version, setVersion] = useState(1)
    const dispatch = useDispatch()
    if (!Songsheets) {
        // Show a loading screen or spinner while the data is being fetched
        return <div>Loading...</div>;
    }
    const artistArr = Object.values(Artists)
    const AlbumsArr = Object.values(Albums)

    // console.log(artistId);
    const handleSubmit = (e) => {
        e.preventDefault()
        const albumId = AlbumsArr.find(album => album.name === album_id)?.id
        const artistId = artistArr.find(artist => artist.name === artist_id)?.id
        const newSongsheet = {
            album_id : albumId,
            artist_id : artistId,
            author_id: sessionUser.id,
            body,
            key,
            song_name : title,
            title,
            version : 1

        }
        dispatch(postSongsheet(newSongsheet))
        history.push('/user/songsheets')
    }
    return (
        <form onSubmit={handleSubmit} className="publish-songsheet">
            <label>Album

                <input required value={album_id} onChange={e => setAlbum_id(e.target.value)} />
                <select value={album_id} onChange={e => setAlbum_id(e.target.value)}>
                    {AlbumsArr.map((album, index) => {
                        return (
                            <option value={album.name} key={`album-index-${index}`}>{album.name}</option>
                        )
                    })}
                </select>
            </label>
            <label>Artist
                <input required value={artist_id} onChange={e => setArtist_id(e.target.value)} />
                <select value={artist_id} onChange={e => setArtist_id(e.target.value)}>
                    {artistArr.map((artist, index) => {
                        return (
                            <option value={artist.name} key={`artist-index-${index}`}>{artist.name}</option>
                        )
                    })}
                </select>
            </label>

            <label>Key
                <input required value={key} onChange={e => setKey(e.target.value)} />
            </label>

            <label>Title
                <input required value={title} onChange={e => setTitle(e.target.value)} />
            </label>

            <label>Body</label>
            <textarea value={body} onChange={e => setBody(e.target.value)} className="songsheet-textarea" />
            <button>Create Songsheet</button>
        </form>
    )
}
