import React from 'react'
import { Stage, Layer } from 'react-konva'

import RecordRTC from 'recordrtc'
import fileDownload from 'js-file-download'
import { observer } from 'mobx-react'

import ForcedAnimation from 'components/ForcedAnimation/ForcedAnimation'
import Background from 'components/Background/Background'

import mainStore from 'stores/mainStore'
import { setUp } from 'utils/utils'

import './styles/styles.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const canvas = document.querySelector('canvas')

    const recorder = RecordRTC(canvas, {
      type: 'canvas',
      showMousePointer: false,
      mimeType: 'video/webm;codecs=h264'
    })

    setUp()

    window.setTimeout(() => {
      recorder.startRecording()
    }, mainStore.intialDelay * 1000)

    setTimeout(() => {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob()
        fileDownload(blob, 'video.webm')
      })
    }, mainStore.totalVideoTime * 1000)
  }

  render() {
    return (
      <div className="page_container">
        <div className="outer_container">
          <Stage width={mainStore.width} height={mainStore.height}>
            <Layer>
              <Background />
              <ForcedAnimation />
            </Layer>
          </Stage>
        </div>
      </div>
    )
  }
}

export default observer(App)
