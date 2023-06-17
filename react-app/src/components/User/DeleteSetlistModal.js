import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { DeleteSetlist } from "../../store/setlists"

export default function DeleteSetlistModal({ listId }) {
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

            <h2>Are you sure you want to delete Setlist?</h2>
            <p onClick={closeModal}>No (Keep Setlist)</p>
            <p onClick={deleteSetlist}>Yes (Delete Setlist)</p>
        </div>
    )
}
