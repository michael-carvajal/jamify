import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { DeleteSongsheet } from "../../store/songsheets"

export default function DeleteSongsheetModal({sheetId}) {
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const deleteSongsheet = () => {
        // console.log(typeof sheetId);
        console.log(1);
        dispatch(DeleteSongsheet(sheetId))
        console.log(2);
        closeModal()
        console.log(3);
    }
    return (
        <div className="delete-songsheet">

        <h2>Are you sure you want to delete Songsheet?</h2>
        <p onClick={closeModal}>No (Keep Songsheet)</p>
        <p onClick={deleteSongsheet}>Yes (Delete Songsheet)</p>
        </div>
    )
}
