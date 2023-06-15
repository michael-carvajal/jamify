import { useModal } from "../../context/Modal"

export default function DeleteSongsheetModal({sheetId}) {
    const {closeModal} = useModal()
    const deleteSongsheet = () => {

    }
    return (
        <div className="delete-songsheet">

        <h2>Are you sure you want to delete Songsheet?</h2>
        <p onClick={closeModal}>No (Keep Songsheet)</p>
        <p>Yes (Delete Songsheet)</p>
        </div>
    )
}
