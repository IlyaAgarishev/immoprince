import React, { Component } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import './App.css';
import song from './media/song.mp3';
import gif from './media/immo2.gif';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img
          src="https://i.imgur.com/wA6lz7n.gif"
          alt=""
          className="immo-gif"
          ref={c => (this.immo = c)}
          onClick={() => {
            this.player.togglePlay();
          }}
        />

        <AudioPlayer src={song} hidePlayer={true} loop={true} ref={c => (this.player = c)} />
      </div>
    );
  }
}

export default App;
