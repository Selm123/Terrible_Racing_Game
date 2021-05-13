import KeyControl from "./KeyControl";
import ThreeJS from "./ThreeJs";
import ReactAudioPlayer from "react-audio-player";
import mp3_file from '../mp3/One_More_Win.mp3';

function App() {
  return (
    <div className="App">
      {/* <ThreeJS/> */}
      <KeyControl />
      <ReactAudioPlayer id="audio" src={mp3_file} controls />
    </div>
  );
}

export default App;
