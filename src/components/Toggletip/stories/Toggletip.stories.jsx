import React from 'react'

import { Col, Row, Button, Toggletip, ToggletipButton, ToggletipContent } from '../../../components'

export default {
  title: 'ui-components/Toggletip',
  component: Toggletip,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          <Row justify-content='center' align-items='center' addClass='u-my-5'>
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

export const Default = () => (
  <Toggletip>
    <ToggletipButton>
      <Button
        label='open toggletip'
        size='small'
        hasAriaLabel
        icon={{
          name: 'check',
          size: 'big'
        }}
      />
    </ToggletipButton>
    <ToggletipContent>
      <p className='u-my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!</p>
      <Button size='small' label='Learn more' />
    </ToggletipContent>
  </Toggletip>
)

Default.storyName = 'default'

export const withArrow = () => (
  <Toggletip>
    <ToggletipButton>
      <Button
        label='open toggletip'
        size='small'
        hasAriaLabel
        icon={{
          name: 'check',
          size: 'big'
        }}
      />
    </ToggletipButton>
    <ToggletipContent hasArrow>
      <p className='u-my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!</p>
      <Button size='small' label='Learn more' />
    </ToggletipContent>
  </Toggletip>
)

withArrow.storyName = 'with arrow'
