import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { DeleteSongsheet } from "../../store/songsheets"

export default function DeleteSongsheetModal({sheetId, songName}) {
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const deleteSongsheet = () => {
        dispatch(DeleteSongsheet(sheetId))
        closeModal()
    }
    return (
        <div className="delete-songsheet">

            <h2>Are you sure you want to delete "{ songName}"?</h2>
            <div className="flex flex-col gap-4">

                <button  onClick={deleteSongsheet} className="bg-ug-red w-full hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4  hover:border-ug-red rounded text-sm md:text-base">
                    Yes (Delete Songsheet)
                </button>
                <button onClick={closeModal} className="bg-none w-full hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4  hover:border-gray-600 rounded text-sm md:text-base">
                    No (Keep Songsheet)
                </button>

            </div>
        </div>
    )
}
