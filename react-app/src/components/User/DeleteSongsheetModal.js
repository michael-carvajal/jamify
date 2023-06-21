import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { DeleteSongsheet } from "../../store/songsheets"

export default function DeleteSongsheetModal({sheetId, songName}) {
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

            <h2>Are you sure you want to delete "{ songName}"?</h2>
            <div className="user-login-signup">
                <p onClick={deleteSongsheet} id="signup-btn" style={{ backgroundColor: "var(--ug-red)" }}>Yes (Delete Songsheet)</p>
                <p onClick={closeModal}  id="login-btn">No (Keep Songsheet)</p>

            </div>
        </div>
    )
}
