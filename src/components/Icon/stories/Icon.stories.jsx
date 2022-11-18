import React from 'react'

import { Col, Row, Icon } from '../../../components'
import { iconList } from '../../../utils/icons/iconsList'

export default {
  title: 'ui-components/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: iconList,
      control: { type: 'select' }
    }
  },
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
small.args = { name: 'close', size: 'small' }
small.storyName = 'small'

export const normal = Template.bind({})
normal.args = { name: 'close', size: 'normal' }
normal.storyName = 'normal'

export const big = Template.bind({})
big.args = { name: 'close', size: 'big' }
big.storyName = 'big'
