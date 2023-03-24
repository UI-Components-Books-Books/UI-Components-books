import React from 'react'

import {
  Col,
  Row,
  Icon,
  Input,
  InputStyle,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from '../../../components'

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
        <Icon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='48'
            width='48'
            viewBox='0 0 48 48'
          >
            <path id='play' d='M16 37.85v-28l22 14Z' />
          </svg>
        </Icon>
      </InputLeftAddon>

      <Input placeholder='With addons' addClass='u-mt-3' />

      <InputRightAddon>
        <Icon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='48'
            width='48'
            viewBox='0 0 48 48'
          >
            <path
              id='check'
              d='M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z'
            />
          </svg>
        </Icon>
      </InputRightAddon>
    </InputStyle>

    <InputStyle>
      <Input placeholder='With InputStyle' addClass='u-mt-3' />
    </InputStyle>

    <Input placeholder='Alone' addClass='u-mt-3' />
  </InputGroup>
)

Default.storyName = 'default'
