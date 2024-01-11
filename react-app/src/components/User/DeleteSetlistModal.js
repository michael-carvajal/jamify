import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { DeleteSetlist } from "../../store/setlists"

export default function DeleteSetlistModal({ listId,listName }) {
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const deleteSetlist = () => {
        dispatch(DeleteSetlist(listId))
        closeModal()
    }
    return (
        <div className="delete-songsheet">

            <h2>Are you sure you want to delete "{ listName}"?</h2>
            <div className="flex flex-col gap-4">
                <button onClick={deleteSetlist} className="bg-ug-red w-full hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4  hover:border-ug-red rounded text-sm md:text-base">
                    Yes (Delete Setlist)
                </button>
                <button onClick={closeModal} className="bg-none w-full hover:bg-gray-800 text-white font-bold py-2 px-4 border-b-4  hover:border-gray-600 rounded text-sm md:text-base">
                    No (Keep Setlist)
                </button>
            </div>
        </div>
    )
}
