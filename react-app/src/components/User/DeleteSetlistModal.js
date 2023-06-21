import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { DeleteSetlist } from "../../store/setlists"

export default function DeleteSetlistModal({ listId,listName }) {
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const deleteSetlist = () => {
        // console.log(typeof listId);
        console.log(1);
        dispatch(DeleteSetlist(listId))
        console.log(2);
        closeModal()
        console.log(3);
    }
    // console.log(listId);
    return (
        <div className="delete-songsheet">

            <h2>Are you sure you want to delete { listName}?</h2>
            <div className="user-login-signup">
                <p onClick={deleteSetlist} id="signup-btn">Yes (Delete Setlist)</p>
                <p onClick={closeModal} id="login-btn">No (Keep Setlist)</p>
            </div>
        </div>
    )
}
