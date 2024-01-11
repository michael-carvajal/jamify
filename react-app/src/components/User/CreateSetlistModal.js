import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSetlist, putSetlist } from '../../store/setlists';
import { useModal } from '../../context/Modal';
import AllSetlist from '../Tables/Setlists';
export default function CreateSetlistModal({ type, id, addToSetlist, songId, setlist }) {
    const session = useSelector(state => state.session)
    const [name, setName] = useState(setlist?.name || "");
    const [errors, setErrors] = useState({})
    const [description, setDescription] = useState(setlist?.description || "");
    const dispatch = useDispatch()
    const { setModalContent, closeModal } = useModal();

    const handleSubmit = (e) => {

        e.preventDefault();
        const newErrors = {};
        if (name.length < 5 || name.length > 20) {
            newErrors.name = "Setlist name must be between 5 and 20 letters long"
        }
        if (description.length < 10 || description.length > 50) {
            newErrors.description = "Description must be between 10 and 50 letters long"
        }
        if (Object.values(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        const setlist = {
            name,
            author_id: session.user.id,
            description,
            public: true,
        }
        if (type === "edit") {
            dispatch(putSetlist(setlist, id))//edit
            closeModal()
            return
        }
        dispatch(postSetlist(setlist))
        // closeModal()
        if (addToSetlist) {
            setModalContent(<AllSetlist type="add" songId={songId} />)
            return
        }
        closeModal()
    };
    return (
        <form onSubmit={handleSubmit} className='create-setlist-form'>
            <div className="signup-header">
                <h1>{type === "create" ? "Create" : "Update" } Setlist</h1>
                <i className="fa fa-times hover:text-gray-500" onClick={closeModal}></i>
            </div>
            {errors.name && <p className='errors'>{ errors.name}</p>}
            <input placeholder='Name' required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.description && <p className='errors'>{ errors.description}</p>}
            <input placeholder='Description' required value={description} onChange={(e) => setDescription(e.target.value)} />

            <button type="submit" className='bg-ug-yellow w-full hover:bg-yellow-600
            border-yellow-600 text-white font-bold py-2 px-4 border-b-4 border-red- hover:border-ug-yellow rounded text-sm md:text-base'>{type === "edit" ? "UPDATE" : "CREATE"}</button>


        </form>
    );
}
