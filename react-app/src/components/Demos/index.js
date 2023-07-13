import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDemo, fetchDemos, postDemo } from '../../store/demos';
import './demos.css';

const Demos = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [name, setName] = useState('');
    const [isUploading, setIsUploading] = useState(false)
    const dispatch = useDispatch();
    const { demos, session } = useSelector((state) => state);
    const fileInputRef = useRef(null);

    useEffect(() => {
        dispatch(fetchDemos());
    }, [dispatch]);

    if (!demos || !session) {
        return <h2>Loading...</h2>;
    }

    if (!session.user) {
        return <h2>Login to create Demos!</h2>;
    }

    const userDemos = Object.values(demos).filter((demo) => demo.author_id === session.user?.id);

    const handleRecordButtonClick = () => {
        fileInputRef.current.click(); // Programmatically trigger the file input
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setAudioFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsUploading(true)

        // Create a FormData object to send the file and form data
        const formData = new FormData();
        formData.append('demo', audioFile);
        formData.append('name', name);
        formData.append('public', true);
        formData.append('author_id', session.user.id);

        await dispatch(postDemo(formData));
        setName('')
        setAudioFile(null)
        setIsUploading(false)
    };

    const handleDelete = async (demo) => {
        await dispatch(deleteDemo(demo));
    };
    console.log(audioFile?.name);
    return (
        <div className="demos-page">

            {isUploading ?
                <div className='loading-btn'>

                    <button style={{ cursor: 'wait', alignSelf: 'center', marginBottom: '30px' }} className='upload-btn' id='isUploading'></button>
                    <p style={{textAlign: 'center'}}>Uploading {audioFile?.name}</p>
                </div>


                : <form onSubmit={handleSubmit} encType="multipart/form-data" className="demo-form">
                    <div className="record-container">
                        <label htmlFor="audio" style={{ paddingRight: '20px' }}>Upload File:</label>
                        <input
                            type="file"
                            id="audio"
                            accept="audio/*"
                            onChange={handleFileChange}
                            required
                            ref={fileInputRef}
                            style={{ display: 'none' }} // Hide the file input
                        />
                    <p onClick={handleRecordButtonClick} className='upload-btn' id='pre-upload'></p>
                    </div>
                    {audioFile?.name && <p>{audioFile.name} <i className='fa fa-times' onClick={() => setAudioFile(null)}></i></p>}
                <div className="demo-inputs">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input name='name' required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>}
            <div className="user-demos">
                {userDemos.map((demo, idx) => {
                    return (
                        <div key={`index-to-demos-${idx}`}>
                            <audio controls>
                                <source src={demo.file_link} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                            <i onClick={() => handleDelete(demo)} className="fa fa-trash"></i>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Demos;
