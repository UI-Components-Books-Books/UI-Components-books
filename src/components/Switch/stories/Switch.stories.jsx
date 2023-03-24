import React, { useState } from 'react'

import { Col, Row, Switch } from '../../../components'

export default {
  title: 'ui-components/Switch',
  component: Switch,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          <Row
            justify-content='center'
            align-items='center'
            flex-direction='column'
          >
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

export const Default = () => <Switch />

Default.storyName = 'default'

export const DifferentSizes = () => {
  return (
    <>
      <Switch size='sm' name='small' />
      <Switch size='md' name='medium' />
      <Switch size='lg' name='large' />
    </>
  )
}

DifferentSizes.storyName = 'different sizes'

export const withAriaLabel = () => {
  return <Switch isLabelVisible label='With aria label' />
}

withAriaLabel.storyName = 'with aria label'

export const DifferentStates = () => {
  return (
    <>
      <Switch isDisabled name='disabled' />
      <Switch isDisabled defaultChecked name='disabled-default' />
      <Switch defaultChecked name='default' />
    </>
  )
}

DifferentStates.storyName = 'different states'

export const WithIssuingValue = () => {
  const [state, setState] = useState({ id: '', value: '' })

  const onChange = (value) => setState(value)

  return (
    <>
      <Switch onChange={onChange} value='my value' />
      <p className='u-my-2'>{JSON.stringify(state, 2, null)}</p>
    </>
  )
}

WithIssuingValue.storyName = 'with issuing value'
