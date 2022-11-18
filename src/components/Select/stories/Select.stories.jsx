import React from 'react'

import { Col, Row, Select } from '../../../components'

export default {
  title: 'ui-components/Select',
  component: Select,
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

const Template = (args) => (
  <Select {...args}>
    <option value={1}>Lorem, ipsum dolor.</option>
    <option value={2}>Lorem, ipsum dolor.</option>
    <option value={3}>Lorem, ipsum dolor.</option>
  </Select>
)

export const Default = Template.bind({})

Default.storyName = 'default'

export const Disabled = Template.bind({})

Disabled.storyName = 'disabled state'
Disabled.args = {
  isDisabled: true
}

export const WithOtherIcon = Template.bind({})

WithOtherIcon.storyName = 'with other icon'
WithOtherIcon.args = {
  icon: 'check'
}

export const WithVisibleLabel = Template.bind({})

WithVisibleLabel.storyName = 'with visible label'
WithVisibleLabel.args = {
  isLabelVisible: true
}
