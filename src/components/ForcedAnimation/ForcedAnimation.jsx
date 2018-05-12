import React from 'react'
import { Rect, Group } from 'react-konva'
import nodeStore from 'stores/nodeStore'

const ForcedAnimation = () => (
  <Group>
    <Rect
      x={0}
      y={0}
      width={50}
      height={50}
      fill={'green'}
      ref={ref => nodeStore.updateNode('block', ref)}
    />
  </Group>
)

export default ForcedAnimation
