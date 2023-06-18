import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSetlist } from '../../store/setlists';
import { useModal } from '../../context/Modal';
export default function CreateSetlistModal() {
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
                <textarea required  value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>

            <button type="submit">Create Setlist</button>
        </form>
    );
}
