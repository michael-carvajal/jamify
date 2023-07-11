import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { deleteRating } from "../../store/ratings"

export default function DeleteRatingModal({ratingId}) {
    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteRating(ratingId))
        closeModal()
    }
    return (
        <div className="delete-songsheet">

            <h2>Are you sure you want to delete this rating?</h2>
            <div className="user-login-signup">
                <p onClick={handleDelete} id="signup-btn" style={{ backgroundColor: "var(--ug-red)" }}>Yes (Delete Rating)</p>
                <p onClick={closeModal} id="login-btn">No (Keep Rating)</p>

            </div>
        </div>
    )
}
