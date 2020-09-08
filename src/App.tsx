/* istanbul ignore file */

import React from 'react'
import styled from 'styled-components'
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
      <Example>
        <Title>Full options</Title>
        <Player playlist={playlist} />
      </Example>
      <Example>
        <Title>No options</Title>
        <Player
          playlist={playlist}
          canRepeat={false}
          canShuffle={false}
          canChangeVolume={false}
        />
      </Example>
      <Example>
        <Title>No volume</Title>
        <Player playlist={playlist} canChangeVolume={false} />
      </Example>
      <Example>
        <Title>No repeat</Title>
        <Player playlist={playlist} canRepeat={false} />
      </Example>
      <Example>
        <Title>No shuffle</Title>
        <Player playlist={playlist} canShuffle={false} />
      </Example>
      <Example>
        <Title>Only one track</Title>
        <Player playlist={[playlist[0]]} />
      </Example>
      <Example>
        <Title>Minimum width</Title>
        <MobileWidth>
          <Player playlist={playlist} />
        </MobileWidth>
      </Example>
    </div>
  )
}

export default App

const Example = styled.div`
  margin-bottom: 20px;
`
const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`
const MobileWidth = styled.div`
  width: 280px;
`
