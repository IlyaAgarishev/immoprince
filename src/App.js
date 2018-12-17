import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';

import './App.css';
import song from './media/song.mp3';
import gif from './media/immo2.gif';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={gif} alt="" className="immo-gif" />
        <AudioPlayer autoPlay={true} src={song} hidePlayer={true} loop={true} />
      </div>
    );
  }
}

export default App;
