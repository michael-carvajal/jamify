import { useState } from "react"
import { useDispatch } from "react-redux"

export default function AddAssociations({ type }) {
    const [val, setVal] = useState()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        switch (type) {
            case 'Artist':

                break;
            case 'Genre':

                break;
            case 'Album':

                break;

            default:
                break;
        }
    }
    return (
        <div className="signup-modal">
            <form onSubmit={handleSubmit}>
                <h1>Add {type}</h1>
                <input value={val} onChange={(e) => setVal(e.target.value)} type="text"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
