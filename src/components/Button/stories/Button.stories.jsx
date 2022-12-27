import React from 'react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Col, Row, Button } from '../../../components'

export default {
  title: 'ui-components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'normal', 'big'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['primary', 'secondary', 'no-line'],
      control: { type: 'radio' }
    },
    hasAriaLabel: {
      options: [true, false],
      control: { type: 'boolean' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' }
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

const Template = (args) => <Button {...args} />

export const text = Template.bind({})
text.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal'
}

text.storyName = 'text'

export const icon = Template.bind({})
icon.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal',
  hasAriaLabel: true,
  icon: {
    path: '/assets/icons/svg/close.svg',
    size: 'big'
  }
}

icon.storyName = 'icon'

export const textAndIcon = Template.bind({})
textAndIcon.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal',
  icon: {
    path: '/assets/icons/svg/close.svg'
  }
}

textAndIcon.storyName = 'with left icon'

export const textAndIconReverted = Template.bind({})
textAndIconReverted.args = {
  variant: 'primary',
  label: 'Button',
  size: 'normal',
  icon: {
    path: '/assets/icons/svg/close.svg',
    position: 'right'
  }
}

textAndIconReverted.storyName = 'with right icon'

export const interactions = Template.bind({})
interactions.args = {
  ...text.args
}

interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await userEvent.click(canvas.getByRole('button'))

  expect(canvas.getByRole('button')).toHaveFocus()
}

interactions.storyName = 'interactions'
