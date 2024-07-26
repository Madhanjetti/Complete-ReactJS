/*File Stucture
/src
  /assets
    /images
      logo.png
    /audio
      sound.mp3
    /videos
      video.mp4
  MyComponent.js

*/

import React from 'react';
import logo from './assets/images/logo.png';
import sound from './assets/audio/sound.mp3';
import video from './assets/videos/video.mp4';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Media Example</h1>
      
      <div>
        <h2>Image</h2>
        <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
      </div>
      
      <div>
        <h2>Audio</h2>
        <audio controls>
          <source src={sound} type="audio/mp3" />
          
        </audio>
      </div>
      
      <div>
        <h2>Video</h2>
        <video width="320" height="240" controls>
          <source src={video} type="video/mp4" />
          
        </video>
      </div>
    </div>
  );
};

export default App;

