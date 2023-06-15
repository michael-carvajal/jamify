import { useModal } from "../../context/Modal"

export default function DeleteSongsheetModal({sheetId}) {
    const {closeModal} = useModal()
    const deleteSongsheet = () => {
        // console.log(typeof sheetId);
    }
    return (
        <div className="delete-songsheet">

        <h2>Are you sure you want to delete Songsheet?</h2>
        <p onClick={closeModal}>No (Keep Songsheet)</p>
        <p onClick={deleteSongsheet}>Yes (Delete Songsheet)</p>
        </div>
    )
}
