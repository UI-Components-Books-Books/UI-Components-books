import React from 'react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Col, Row, Icon, Input, InputStyle, InputLeftAddon, InputRightAddon } from '../../../components'

export default {
  title: 'ui-components/Input',
  component: Input,
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

export const Default = () => <Input />

Default.storyName = 'default'

export const WithLeftAddon = () => (
  <InputStyle>
    <InputLeftAddon>
      <Icon name='check' />
    </InputLeftAddon>
    <Input placeholder='welcome' />
  </InputStyle>
)

WithLeftAddon.storyName = 'with left addon'

export const WithRightAddon = () => (
  <InputStyle>
    <Input placeholder='welcome' />
    <InputRightAddon>
      <Icon name='check' />
    </InputRightAddon>
  </InputStyle>
)

WithRightAddon.storyName = 'with right addon'

export const AllAddon = () => (
  <InputStyle>
    <InputLeftAddon>
      <Icon name='play' />
    </InputLeftAddon>
    <Input placeholder='welcome' />
    <InputRightAddon>
      <Icon name='check' />
    </InputRightAddon>
  </InputStyle>
)

AllAddon.storyName = 'with left and right addon'

export const interactions = WithLeftAddon.bind({})

interactions.storyName = 'interactions'

interactions.play = async ({ canvasElement }) => {
  const text = 'Input text testing'
  const screen = within(canvasElement)
  const element = screen.getByRole('textbox', { name: 'Default input label' })

  await userEvent.click(element)
  await userEvent.type(element, text)

  expect(element).toHaveFocus()
  expect(element).toHaveValue(text)
}
