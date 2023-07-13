import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDemo, fetchDemos, postDemo } from '../../store/demos';
import './demos.css'

const Demos = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [name, setName] = useState('');
    // const [authorId, setAuthorId] = useState('');
    const dispatch = useDispatch()
    const { demos } = useSelector(state => state)
    const { session } = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchDemos())
    }, [dispatch])

    if (!demos || !session) {
        return <h2>Loading...</h2>
    }
    if (!session.user) {
        return <h2>Login to create Demos!</h2>
    }
    const userDemos = Object.values(demos).filter(demo => demo.author_id === session.user?.id)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAudioFile(file);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object to send the file and form data
        const formData = new FormData();
        formData.append('demo', audioFile);
        formData.append('name', name);
        formData.append('public', true);
        formData.append('author_id', session.user.id);


        await dispatch(postDemo(formData))
    };

    const handleDelete = (demo) => {
        dispatch(deleteDemo(demo))
        // setAudioFile(null)
        // setName('')
        // setAuthorId('')
    }
    return (
        <div className='demos-page'>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className='demo-form'
            >
                <div class="record-container">
                    <input type="checkbox" id="btn" style={{display: 'none'}} />
                        <label for="btn"></label>
                </div>
                <div className='demo-inputs'>

                <div>
                    <label htmlFor="audio">Audio File:</label>
                    <input type="file" id="audio" accept="audio/*" onChange={handleFileChange} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                </div>

                <button type="submit">Submit</button>
            </form>
            <div className='user-demos'>

            {userDemos.map((demo, idx) => {
                return (
                    <div key={`index-to-demos-${idx}`}>
                        <audio controls>
                            <source src={demo.file_link} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                        <i onClick={() => handleDelete(demo)} className='fa fa-trash'></i>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

export default Demos;


/* <div>
    <label htmlFor="authorId">Author ID:</label>
    <input type="text" id="authorId" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
</div> */
