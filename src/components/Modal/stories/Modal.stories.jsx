import React, { useRef, useState } from 'react'

import { Col, Row, Button, Link, Modal } from '../../../components'

export default {
  title: 'ui-components/Modal',
  component: Modal,
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

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)

  const buttonRef = useRef()

  return (
    <>
      <Button ref={buttonRef} label='Open modal' onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={(value) => setIsOpen(value)} finalFocusRef={buttonRef}>
        <h3 className='u-text-center'>Contenido de prueba</h3>
        <p>
          Contenido de prueba para ver si el feature funciona con un <Link>link de prueba</Link> para el focus trap
        </p>
        <details>
          <summary>Y un details y summary de prueba</summary>
          <p>Con texto de prueba</p>
        </details>
      </Modal>
    </>
  )
}

Default.storyName = 'default'
