export default function Demos() {
    const audioFile = "https://jamify-aa.s3.us-east-2.amazonaws.com/demos/Moonunitt+-+Young+Dave.mp3"
    return (
        <div>
            Demos
            <audio controls>
                <source src={audioFile} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
