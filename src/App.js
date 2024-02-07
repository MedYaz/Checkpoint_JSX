import './style.css';
import imageInSrc from "./photo/imageInSrc.jpg"
import { Player } from 'video-react';

function App() {
  return (
    <div className='bloc-total'>
      <div className='div-total'>
        <h1 style={{color: "red", textAlign:"center"}}>Mohamed YAZIDI</h1>
          <br/>
        <img src={imageInSrc} alt ='Landscape1'/>
          <br/>
        <img src="/photo/imageInPublic.jpg" alt="Landscape2"/>
      </div>
        <br/>
      <div className='mediaplayer'>
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
        <Player>
          <source type="video/mp4" src="/myVideo/myVideo.mp4"/>
        </Player>
      </div>
    </div>
  );
}

export default App;
