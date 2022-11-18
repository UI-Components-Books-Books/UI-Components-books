import React from 'react'

import {
  Col,
  Row,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper
} from '../../../components'

export default {
  title: 'ui-components/NumberInput',
  component: NumberInput,
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
  <NumberInput>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
)

Default.storyName = 'default'

export const controlled = () => (
  <NumberInput max={10} min={5} defaultValue={5} keepWithinRange>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
)

controlled.storyName = 'keep with in a range'

export const withIcon = () => (
  <NumberInput max={10} min={5} defaultValue={5} keepWithinRange>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper>🌞</NumberIncrementStepper>
      <NumberDecrementStepper>🌚</NumberDecrementStepper>
    </NumberInputStepper>
  </NumberInput>
)

withIcon.storyName = 'with other icon'
