import React from 'react'

import { Col, Row, Button, PopoverModal, PopoverModalButton, PopoverModalContent } from '../../../components'

export default {
  title: 'ui-components/PopoverModal',
  component: PopoverModal,
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
  <>
    <PopoverModal>
      <PopoverModalButton>
        <Button
          label='open PopoverModal'
          size='small'
          hasAriaLabel
          icon={{
            name: 'check',
            size: 'big'
          }}
        />
      </PopoverModalButton>
      <PopoverModalContent>
        <p className='u-my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!</p>
        <Button size='small' label='Learn more' />
      </PopoverModalContent>
    </PopoverModal>
  </>
)

Default.storyName = 'default'

export const withArrow = () => (
  <PopoverModal>
    <PopoverModalButton>
      <Button
        label='open PopoverModal'
        size='small'
        hasAriaLabel
        icon={{
          name: 'check',
          size: 'big'
        }}
      />
    </PopoverModalButton>
    <PopoverModalContent hasArrow>
      <p className='u-my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!</p>
      <Button size='small' label='Learn more' />
    </PopoverModalContent>
  </PopoverModal>
)

withArrow.storyName = 'with arrow'
