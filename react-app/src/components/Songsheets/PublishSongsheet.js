import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSongsheet, putSongsheet } from "../../store/songsheets";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function PublishSongsheet({ type }) {
    const { songsheets } = useSelector((state) => state);
    const sessionUser = useSelector((state) => state.session.user);
    const { Songsheets, Artists, Albums, Genres } = songsheets || {};
    const [album_id, setAlbum_id] = useState("");
    const [artist_id, setArtist_id] = useState("");
    const [genre_id, setGenre_id] = useState("");
    const [body, setBody] = useState("");
    const [key, setKey] = useState("");
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true); // Add loading state
    const history = useHistory();
    const dispatch = useDispatch();

    const { sheetId } = useParams();
    const artistArr = Artists ? Object.values(Artists) : [];
    const genreArr = Genres ? Object.values(Genres) : [];
    const AlbumsArr = Albums ? Object.values(Albums) : [];
    // console.log(genreArr);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true before fetching data
            if (type === "update" && Songsheets && Artists && Albums) {
                const sheetToUpdate = Songsheets[sheetId];
                setAlbum_id(AlbumsArr.find((album) => album.id === sheetToUpdate.album_id)?.name);
                setArtist_id(artistArr.find((artist) => artist.id === sheetToUpdate.artist_id)?.name);
                setBody(sheetToUpdate.body);
                setKey(sheetToUpdate.key);
                setTitle(sheetToUpdate.title);
            }
            setLoading(false); // Set loading to false once data is fetched
        };

        fetchData();
    }, [type, sheetId, Songsheets, Artists, Albums]); // Include Songsheets, Artists, and Albums as dependencies


    const handleSubmit = (e) => {
        e.preventDefault();
        const albumId = AlbumsArr.find((album) => album.name === album_id)?.id;
        const artistId = artistArr.find((artist) => artist.name === artist_id)?.id;
        const genreId = genreArr.find((genre) => genre.name === genre_id)?.id;
        const newSongsheet = {
            album_id: albumId,
            artist_id: artistId,
            author_id: sessionUser.id,
            genre_id: genreId,
            body,
            key,
            song_name: title,
            title,
            version: 1,
        };
        dispatch(postSongsheet(newSongsheet));
        history.push("/user/songsheets");
    };
    if (sessionUser?.id === undefined) {
        return (
            <h1>Sign in to publish your Songsheet!</h1>
        )
    }

    if (loading) {
        return <div>Loading...</div>; // Render a loading message or spinner
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        const albumId = AlbumsArr.find((album) => album.name === album_id)?.id;
        const artistId = artistArr.find((artist) => artist.name === artist_id)?.id;
        const genreId = genreArr.find((genre) => genre.name === genre_id)?.id;
        const updatedSongsheet = {
            album_id: albumId,
            artist_id: artistId,
            author_id: sessionUser.id,
            genre_id: genreId,
            body,
            key,
            song_name: title,
            title,
            version: 1,
        };
        dispatch(putSongsheet(updatedSongsheet, sheetId))
        history.push("/user/songsheets");

    }
    return (
        <form onSubmit={type === "update" ? handleUpdate : handleSubmit} className="publish-songsheet">
            <label>
                Album
                <input required value={album_id} onChange={(e) => setAlbum_id(e.target.value)} />
                <select value={album_id} onChange={(e) => setAlbum_id(e.target.value)}>
                    {AlbumsArr.map((album, index) => (
                        <option value={album.name} key={`album-index-${index}`}>
                            {album.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Artist
                <input required value={artist_id} onChange={(e) => setArtist_id(e.target.value)} />
                <select value={artist_id} onChange={(e) => setArtist_id(e.target.value)}>
                    {artistArr.map((artist, index) => (
                        <option value={artist.name} key={`artist-index-${index}`}>
                            {artist.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Genre
                <input required value={genre_id} onChange={(e) => setGenre_id(e.target.value)} />
                <select value={genre_id} onChange={(e) => setGenre_id(e.target.value)}>
                    {genreArr.map((genre, index) => (
                        <option value={genre.name} key={`genre-index-${index}`}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Key
                <input required value={key} onChange={(e) => setKey(e.target.value)} />
            </label>
            <label>
                Title
                <input required value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>Body</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className="songsheet-textarea" />
            {type === "update" ? <button type="submit">Update Songsheet</button> : <button type="submit">Create Songsheet</button>}
        </form>
    );
}
