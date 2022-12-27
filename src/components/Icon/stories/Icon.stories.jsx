import React from 'react'

import { Col, Row, Icon } from '../../../components'

export default {
  title: 'ui-components/Icon',
  component: Icon,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          <Row justify-content='center' align-items='center'>
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

const Template = (args) => <Icon {...args} />

export const small = Template.bind({})
small.args = { path: '/assets/icons/svg/close.svg', size: 'small' }
small.storyName = 'small'

export const normal = Template.bind({})
normal.args = { path: '/assets/icons/svg/close.svg', size: 'normal' }
normal.storyName = 'normal'

export const big = Template.bind({})
big.args = { path: '/assets/icons/svg/close.svg', size: 'big' }
big.storyName = 'big'
