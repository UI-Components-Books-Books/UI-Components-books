import React from 'react'

import { Col, Row, Icon, Input, InputStyle, InputGroup, InputLeftAddon, InputRightAddon } from '../../../components'

export default {
  title: 'ui-components/InputGroup',
  component: InputGroup,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          {story()}
        </Col>
      </Row>
    )
  ]
}

export const Default = () => (
  <InputGroup>
    <InputStyle>
      <InputLeftAddon>
        <Icon name='play' />
      </InputLeftAddon>

      <Input placeholder='With addons' addClass='u-mt-3' />

      <InputRightAddon>
        <Icon name='check' />
      </InputRightAddon>
    </InputStyle>

    <InputStyle>
      <Input placeholder='With InputStyle' addClass='u-mt-3' />
    </InputStyle>

    <Input placeholder='Alone' addClass='u-mt-3' />
  </InputGroup>
)

Default.storyName = 'default'
