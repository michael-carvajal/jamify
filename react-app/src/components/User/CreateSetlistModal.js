import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSetlist, putSetlist } from '../../store/setlists';
import { useModal } from '../../context/Modal';
export default function CreateSetlistModal({type, id}) {
    const session = useSelector(state => state.session)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch()
    const {closeModal} = useModal()
    const handleSubmit = (e) => {
        e.preventDefault();
        const setlist = {
            name,
            author_id : session.user.id,
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
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <input required  value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>

            <button type="submit">{type === "edit" ? "Update" : "Create"} Setlist</button>
        </form>
    );
}
