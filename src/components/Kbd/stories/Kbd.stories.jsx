import React from 'react'

import { Col, Row, Kbd } from '../../../components'

export default {
  title: 'ui-components/Kbd',
  component: Kbd,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='3' hd='2'>
          <Row justify-content='center' align-items='center'>
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

export const Default = () => (
  <span>
    <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>D</Kbd>
  </span>
)

Default.storyName = 'default'
