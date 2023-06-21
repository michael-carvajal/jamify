import { useState } from "react"
import { useDispatch } from "react-redux"
import { postAssociations } from "../../store/songsheets"
import { useModal } from "../../context/Modal"

export default function AddAssociations({ type, artistArr }) {
    const [name, setName] = useState("")
    const [year_released, setYear_released] = useState("")
    const [artist_id, setArtist_id] = useState("");

    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const handleSubmit = (e) => {
        e.preventDefault()

        let artistId = null;
        if (type === "Album") {
            artistId = artistArr.find((artist) => artist.name === artist_id)?.id;
        }

        const obj = {
            name,
            year_released :parseInt(year_released),
            type,
            artist_id :artistId
        }
        switch (type) {
            case 'Artist':
                dispatch(postAssociations(obj))
                closeModal()
                break;
            case 'Genre':
                dispatch(postAssociations(obj))
                closeModal()

                break;
            case 'Album':
                dispatch(postAssociations(obj))
                closeModal()

                break;

            default:
                break;
        }
    }
    return (
        <div className="signup-modal">
            <form onSubmit={handleSubmit}>
                <h1>Add {type}</h1>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} type="text" className="input-shape"></input>
                {type === "Album" && <input placeholder="Year" value={year_released} className="input-shape" onChange={(e) => setYear_released(e.target.value)} type="number"
                    max={2050}
                    min={500}
                ></input>}
                {type === "Album" && <select value={artist_id} className="input-shape" onChange={(e) => setArtist_id(e.target.value)}>
                    <option disabled selected value="">Choose Artist</option>

                    {artistArr.map((artist, index) => (
                        <option value={artist.name} key={`artist-index-${index}`}>
                            {artist.name}
                        </option>
                    ))}
                </select>}
                <button type="submit" id="signup-btn">Add</button>
            </form>
        </div>
    )
}
