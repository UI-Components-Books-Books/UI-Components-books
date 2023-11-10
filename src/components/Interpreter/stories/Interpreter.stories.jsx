import React from 'react'

import { Col, Row, Interpreter } from '../..'

export default {
  title: 'ui-components/Interpreter',
  component: Interpreter,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='6' hd='5'>
          <Row justify-content='center' align-items='center' addClass='u-my-5' style={{ gap: '1rem' }}>
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

export const VideoInterpreter = () => (
  <Interpreter url1='video.mp4' />
)

VideoInterpreter.storyName = 'Video Interprete'

export const MultiVideoInterpreter = () => (
  <Interpreter url1='video1.mp4' url2='video2.mp4' />
)

MultiVideoInterpreter.storyName = 'Multiple video Interprete'
