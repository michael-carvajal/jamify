import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

// import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';
import './styles.css';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

export default function Keyboard({ displayPiano }) {
    if (displayPiano !== "display") {
        return null
    }
    return (
        <div className={`keyboard-container ${displayPiano}`} >
            <div className="mt-5">
                <BasicPiano />
            </div>

        </div>
    )
}

//   <div className="mt-5">
//     <p>
//       Responsive piano which resizes to container's width. Try resizing the
//       window!
//     </p>
//     <ResponsivePiano />
//   </div>

//   <div className="mt-5">
//     <p>Piano with custom styling - see styles.css</p>
//     <ResponsivePiano className="PianoDarkTheme" />
//   </div>

function BasicPiano() {
    return (
        <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
                <Piano
                    noteRange={noteRange}
                    width={300}
                    playNote={playNote}
                    stopNote={stopNote}
                    disabled={isLoading}
                    keyboardShortcuts={keyboardShortcuts}
                />
            )}
        />
    );
}

// function ResponsivePiano(props) {
//   return (
//     <DimensionsProvider>
//       {({ containerWidth, containerHeight }) => (
//         <SoundfontProvider
//           instrumentName="acoustic_grand_piano"
//           audioContext={audioContext}
//           hostname={soundfontHostname}
//           render={({ isLoading, playNote, stopNote }) => (
//             <Piano
//               noteRange={noteRange}
//               width={containerWidth}
//               playNote={playNote}
//               stopNote={stopNote}
//               disabled={isLoading}
//               {...props}
//             />
//           )}
//         />
//       )}
//     </DimensionsProvider>
//   );
// }
