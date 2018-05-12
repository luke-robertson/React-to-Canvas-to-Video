import React from 'react'
import { Rect, Group } from 'react-konva'
import mainStore from 'stores/mainStore'

const Background = () => (
  <Group>
    <Rect
      x={0}
      y={0}
      width={mainStore.width}
      height={mainStore.height}
      fill={'black'}
      draggable
    />
  </Group>
)

export default Background
