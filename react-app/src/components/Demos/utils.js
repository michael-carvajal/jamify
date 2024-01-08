import jammin from '../../assets/jammin.mp3';

export const handleDemoUpload = async (setAudioFile, session, setIsUploading, dispatch, postDemo, setName) => {
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
