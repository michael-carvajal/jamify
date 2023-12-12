import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDemo, fetchDemos, postDemo } from '../../store/demos';
import './demos.css';
import { useModal } from '../../context/Modal';
import DeleteDemoModal from './DeleteDemoModal';
import jammin from '../../assets/jammin.mp3';

const Demos = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [name, setName] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const dispatch = useDispatch();
    const { session } = useSelector((state) => state);
    const { demos } = useSelector((state) => state);
    const fileInputRef = useRef(null);
    const { setModalContent, closeModal } = useModal();

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
        // console.log(file);
        setAudioFile(file);
    };

    const handleDemoUpload = async () => {
        try {
            const response = await fetch(jammin);
            const blob = await response.blob();
            const file = new File([blob], "jammin.mp3", { type: "audio/mp3" });
            setAudioFile(file);
            const demoName = "Jammin by Bob Marley";

            const formData = new FormData();
            formData.append("demo", file);
            formData.append("name", demoName);
            formData.append("public", true);
            formData.append("author_id", session.user.id);

            setIsUploading(true);
            await dispatch(postDemo(formData));
            setAudioFile(null);
            setName("");
            setIsUploading(false);
        } catch (error) {
            // console.log(error);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsUploading(true);

        // Create a FormData object to send the file and form data
        const formData = new FormData();
        formData.append('demo', audioFile);
        formData.append('name', name);
        formData.append('public', true);
        formData.append('author_id', session.user.id);

        await dispatch(postDemo(formData));
        setName('');
        setAudioFile(null);
        setIsUploading(false);
    };

    const handleDelete = async (demo) => {
        await dispatch(deleteDemo(demo));
        closeModal();
    };
    // console.log(audioFile, name);
    return (
        <div className="demos-page">
            {isUploading ? (
                <div className="loading-btn demo-form">
                    <button
                        style={{ cursor: 'wait', alignSelf: 'center', marginBottom: '30px' }}
                        className="upload-btn"
                        id="isUploading"
                    ></button>
                    <p style={{ textAlign: 'center', color: 'rgb(58, 58, 58)', zIndex: '10', fontWeight: '500' }}>Uploading {audioFile?.name}</p>
                    <div class="custom-shape-divider-bottom-1689291612">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="demo-form">
                    <div className="record-container">
                        <label htmlFor="audio" style={{ paddingRight: '20px' }} className="md-font">
                            Upload File:
                        </label>
                        <input
                            type="file"
                            id="audio"
                            accept="audio/*"
                            onChange={handleFileChange}
                            required
                            ref={fileInputRef}
                            style={{ display: 'none' }} // Hide the file input
                        />
                        <p onClick={handleRecordButtonClick} className="upload-btn" id="pre-upload"></p>
                    </div>
                    {audioFile?.name && <p style={{ textAlign: 'center' }}>{audioFile.name} <i onClick={() => setAudioFile(null)} className='fa fa-times'></i></p>}
                    <div className="demo-inputs">
                        <div className="record-container">
                            <label htmlFor="name" className="md-font" style={{ paddingRight: '20px' }}>
                                Name:
                            </label>
                            <input name="name" required type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="upload-submit">
                            <button type='submit' className="bg-ug-yellow hover:bg-ug-red text-white font-bold py-2 px-4 border-b-4 border-ug-red hover:border-ug-yellow rounded">
                            Submit
                        </button>

                            <button type='submit' onClick={handleDemoUpload} className="bg-ug-red hover:bg-ug-yellow text-white font-bold py-2 px-4 border-b-4 border-ug-yellow hover:border-ug-red rounded">
                            Demo Upload
                        </button>
                    </div>
                    <div class="custom-shape-divider-bottom-1689291612">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </form>
            )}
            {userDemos.length === 0 ? (
                <div className='empty-demos'>
                    <h2>Demos are empty. Upload demos now!</h2>
                    <img src='/ag.png' alt='acoustic guitar'></img>
                </div>
            ) : (
                <div className="user-demos">
                    {userDemos.map((demo, idx) => {
                        return (
                            <div key={`index-to-demos-${idx}`} className="demo-item">
                                <audio controls>
                                    <source src={demo.file_link} type="audio/mp3" />
                                    Your browser does not support the audio element.
                                </audio>
                                <div className="demo-details">
                                    <p>
                                        {demo.name} <span>{demo.created_at.split(' ').splice(0, 4).join(' ')}</span>
                                    </p>
                                    <i
                                        onClick={() => setModalContent(<DeleteDemoModal demo={demo} handleDelete={handleDelete} closeModal={closeModal} />)}
                                        className="fa fa-trash"
                                    ></i>
                                </div>
                            </div>
                        );
                    }).reverse()}
                </div>
            )}
        </div>
    );
};

export default Demos;
