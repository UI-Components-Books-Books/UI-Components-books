import React, { useState, useRef } from 'react'

import { Col, Row, Button, Image, Paper, Tour } from '../../../components'

export default {
  title: 'ui-components/Tour',
  component: Tour,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        {story()}
      </Row>
    )
  ]
}

const Template = () => (
  <>
    <Col xs='11' mm='10' md='9' hd='8' lg='7'>
      <Paper>
        <p className='paragraph u-my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta
          minima neque saepe architecto cupiditate impedit mollitia nesciunt
          similique accusantium tempora id enim, placeat omnis in, facere sit
          quasi quisquam doloremque nisi officiis tempore porro temporibus
          voluptatibus? Minus delectus pariatur porro officia deserunt,
          voluptatum totam impedit? Rem recusandae sed ad? Molestias, distinctio
          explicabo. Tenetur quis facere recusandae excepturi reiciendis soluta,
          odio nobis itaque fugit adipisci ut officia corporis eligendi harum.
          Minima in quasi doloribus reiciendis alias, beatae molestiae omnis
          dolores impedit expedita magnam cupiditate quas velit.
        </p>
      </Paper>
    </Col>

    <Col xs='11' mm='10' md='9' hd='8' lg='7'>
      <Row justify-content='space-evenly'>
        <Button addClass='download' label='Download' />
        <Button addClass='next' label='Next' />
      </Row>
    </Col>
  </>
)

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)

  const buttonRef = useRef()

  const onClose = (value) => {
    setIsOpen(value)
  }

  const steps = [
    {
      target: '.paragraph',
      content: 'Paragraph'
    },
    {
      target: '.download',
      content: 'Download button'
    },
    {
      target: '.next',
      content: 'Next button'
    }
  ]

  return (
    <>
      <Tour
        steps={steps}
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={buttonRef}
      />

      <Col xs='11' mm='10' md='9' hd='8' lg='7'>
        <Button
          ref={buttonRef}
          label='Start tour'
          addClass='u-my-6'
          onClick={() => setIsOpen(!isOpen)}
        />
      </Col>

      {Template()}
    </>
  )
}

Default.storyName = 'default'

export const WithCustomContent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const buttonRef = useRef()

  const onClose = (value) => {
    setIsOpen(value)
  }

  const steps = [
    {
      target: '.paragraph',
      placement: 'left',
      content: (
        <Row justify-content='center' align-items='center'>
          <Col md='12'>
            <p className='u-my-2'>Paragraph</p>
            <Image
              url='https://images.pexels.com/photos/1545346/pexels-photo-1545346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              noCaption
              width='180'
            />
          </Col>
        </Row>
      )
    },
    {
      target: '.download',
      content: (
        <p>
          <strong>Download</strong> button
        </p>
      )
    },
    {
      target: '.next',
      content: (
        <p>
          <em>Next</em> button
        </p>
      )
    }
  ]

  return (
    <>
      <Tour
        steps={steps}
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={buttonRef}
      />

      <Col xs='11' mm='10' md='9' hd='8' lg='7'>
        <Button
          ref={buttonRef}
          label='Start tour'
          addClass='u-my-6'
          onClick={() => setIsOpen(!isOpen)}
        />
      </Col>

      {Template()}
    </>
  )
}

WithCustomContent.storyName = 'with custom content'
