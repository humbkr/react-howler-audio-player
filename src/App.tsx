/* istanbul ignore file */

import React from 'react'
import Player from './modules/player'
import 'normalize.css'
import './App.css'

const playlist = [
  {
    title: "America's Slow Descent Into Madness",
    url: 'https://demo.albaplayer.com/stream/75',
    format: 'mp3',
  },
  {
    title: 'Out of the Dark',
    url: 'https://demo.albaplayer.com/stream/142',
    format: 'mp3',
  },
  {
    title: 'Find a way',
    url: 'https://demo.albaplayer.com/stream/159',
    format: 'mp3',
  },
]

function App() {
  return (
    <div className="App">
      <Player playlist={playlist} />
    </div>
  )
}

export default App
