import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDemo, fetchDemos, postDemo } from '../../store/demos';


const Demos = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [name, setName] = useState('');
    const [authorId, setAuthorId] = useState('');
    const dispatch = useDispatch()
    const { demos } = useSelector(state => state)
    const { session } = useSelector(state => state)
    useEffect(() => {
        // console.log('inside use effect');
        dispatch(fetchDemos())
    }, [dispatch])

    if (!demos || !session) {
        return <h2>Loading...</h2>
    }
    const userDemos = Object.values(demos).filter(demo => demo.author_id === session.user?.id)
    // console.log(userDemos);

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
        formData.append('author_id', authorId);


        // log
        console.log('here is the form dataaa ===================>',  formData);
        await dispatch(postDemo(formData))
    };

    const handleDelete = (demo) => {
        console.log('delete beginning');
        console.log(demo);
        dispatch(deleteDemo(demo))
        // setAudioFile(null)
        // setName('')
        // setAuthorId('')
    }
    console.log(userDemos);
    return (
        <div>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
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
    );
};

export default Demos;
