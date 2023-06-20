import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSetlist, putSetlist } from '../../store/setlists';
import { useModal } from '../../context/Modal';
import AllSetlist from '../Tables/Setlists';
export default function CreateSetlistModal({ type, id, addToSetlist, songId }) {
    const session = useSelector(state => state.session)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch()
    const { setModalContent, closeModal } = useModal();

    const handleSubmit = (e) => {
        e.preventDefault();
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
        closeModal()
        if (addToSetlist) {
            setModalContent(<AllSetlist type="add" songId={songId} />)
        }
    };
    return (
        <form onSubmit={handleSubmit} className='create-setlist-form'>
            <h1>Create Setlist</h1>
            <input placeholder='Name' required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder='Description' required value={description} onChange={(e) => setDescription(e.target.value)} />

            <button type="submit" id='signup-btn' className='create-setlist-btn'
            style={{width: 'fit-content', padding : "10px 15px", alignSelf: "flex-end"}}>{type === "edit" ? "UPDATE" : "CREATE"}</button>
        </form>
    );
}
