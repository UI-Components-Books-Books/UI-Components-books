import React from 'react'

import { Col, Row, SelectGroup, Select } from '../../../components'

export default {
  title: 'ui-components/SelectGroup',
  component: SelectGroup,
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

export const DefaultSelectGroup = (args) => (
  <SelectGroup {...args}>
    <Select addClass='u-my-4'>
      <optgroup label='Lorem, ipsum'>
        <option value={1}>Lorem, ipsum dolor.</option>
        <option value={2}>Lorem, ipsum dolor.</option>
        <option value={3}>Lorem, ipsum dolor.</option>
      </optgroup>
    </Select>
    <Select>
      <optgroup label='Lorem, ipsum'>
        <option value={1}>Lorem, ipsum dolor.</option>
        <option value={2}>Lorem, ipsum dolor.</option>
        <option value={3}>Lorem, ipsum dolor.</option>
      </optgroup>
    </Select>
  </SelectGroup>
)

DefaultSelectGroup.storyName = 'default'
