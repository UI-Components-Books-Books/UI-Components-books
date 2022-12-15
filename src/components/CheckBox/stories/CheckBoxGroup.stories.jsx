import React, { useState } from 'react'

import { Col, Row, CheckBoxGroup, CheckBox } from '../../../components'

export default {
  title: 'ui-components/CheckBoxGroup',
  component: CheckBoxGroup,
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
  <CheckBoxGroup legend='Grupo de prueba'>
    <CheckBox type='checkbox' label='Opción 1' state='normal' />
    <CheckBox type='checkbox' label='Opción 2' state='normal' />
    <CheckBox type='checkbox' label='Opción 3' state='normal' />
  </CheckBoxGroup>
)

Default.storyName = 'default'

export const WithIssuingValue = () => {
  const [state, setState] = useState([])

  const onChange = (value) => setState(value)

  return (
    <>
      <CheckBoxGroup onChecked={onChange} legend='Grupo de prueba'>
        <CheckBox type='checkbox' label='Opción 1' state='normal' />
        <CheckBox type='checkbox' label='Opción 2' state='normal' />
        <CheckBox type='checkbox' label='Opción 3' state='normal' />
      </CheckBoxGroup>
      <p className='u-my-2'>{JSON.stringify(state, 2, null)}</p>
    </>
  )
}

WithIssuingValue.storyName = 'with issuing value'
