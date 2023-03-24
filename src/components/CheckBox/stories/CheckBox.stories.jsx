import React, { useState } from 'react'

import { Col, Row, CheckBox } from '../../../components'

export default {
  title: 'ui-components/CheckBox',
  component: CheckBox,
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

const Template = (args) => <CheckBox {...args} />

export const radio = Template.bind({})

radio.storyName = 'radio'
radio.args = {
  label: 'Opción 1',
  type: 'radio',
  state: 'normal',
  name: 'radio'
}

export const checkbox = Template.bind({})

checkbox.storyName = 'checkbox'
checkbox.args = {
  label: 'Opción 1',
  type: 'checkbox',
  state: 'normal',
  name: 'checkbox'
}

export const WithIssuingValue = () => {
  const [state, setState] = useState({ id: '', value: '' })

  const onChange = (value) => setState(value)

  return (
    <>
      <CheckBox
        onChange={onChange}
        value='my value'
        label='CheckBox with value "my value".'
      />
      <p className='u-my-2'>{JSON.stringify(state, 2, null)}</p>
    </>
  )
}

WithIssuingValue.storyName = 'with issuing value'

// export const Interaction = Template.bind({})

// Interaction.args = {
//   ...checkbox.args
// }

// Interaction.play = async ({ canvasElement }) => {
//   const screen = within(canvasElement)
//   const checkbox = screen.getByRole('checkbox')

//   await userEvent.click(checkbox)

//   expect(checkbox).toBeChecked()
// }

// Interaction.storyName = 'interaction'
