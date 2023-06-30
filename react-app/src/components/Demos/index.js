import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Demos = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [name, setName] = useState('');
    const [authorId, setAuthorId] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAudioFile(file);
    };
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a FormData object to send the file and form data
        const formData = new FormData();
        formData.append('audio', audioFile);
        formData.append('name', name);
        formData.append('authorId', authorId);
        dispatch(formData)
        // Send the form data to your Flask backend using fetch or Axios
        // fetch('/upload-audio', {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then((response) => {
        //         // Handle the response from the backend
        //         // e.g., display success message or handle errors
        //     })
        //     .catch((error) => {
        //         // Handle any errors that occur during the request
        //     });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="audio">Audio File:</label>
                <input type="file" id="audio" accept="audio/*" onChange={handleFileChange} />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="authorId">Author ID:</label>
                <input type="text" id="authorId" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Demos;
