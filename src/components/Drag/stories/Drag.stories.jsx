import React, { useState, useEffect } from 'react'

import { Col, Row, Button, Draggable, Droppable, DragAndDrop, GeneralDraggable } from '../../../components'

import css from './DragStories.module.scss'

export default {
  title: 'ui-components/Drag',
  component: DragAndDrop
}

export const BasicSetup = () => (
  <DragAndDrop>
    <Row justify-content='center' align-items='center'>
      <Col xs='11' mm='10' md='9' lg='5' hd='4'>
        <GeneralDraggable>
          <Draggable id='A' label='Draggable item' disabledDefaultAttributes>
            <Button icon={{ name: 'open_with', size: 'big' }} label='draggable' />
          </Draggable>
        </GeneralDraggable>
      </Col>
      <Col xs='11' mm='10' md='9' lg='5' hd='4'>
        <Droppable id='droppable' validate={['A']} label='droppable'>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable</p>
        </Droppable>
      </Col>
    </Row>
  </DragAndDrop>
)

BasicSetup.storyName = 'basic setup'

export const MultipleContainers = () => (
  <DragAndDrop>
    <Row justify-content='center' align-items='center'>
      <Col xs='11' mm='10' md='9' lg='5' hd='4'>
        <GeneralDraggable addClass={css['c-general-container']}>
          <Draggable id='A1' label='Draggable item' disabledDefaultAttributes>
            <Button icon={{ name: 'open_with', size: 'big' }} label='draggable' />
          </Draggable>
        </GeneralDraggable>
      </Col>
      <Col md='12'>
        <Row justify-content='center' align-items='center'>
          <Col xs='11' mm='10' md='9' lg='5' hd='4'>
            <Droppable id='A' validate={['A']} label='droppable'>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable A</p>
            </Droppable>
          </Col>

          <Col xs='11' mm='10' md='9' lg='5' hd='4'>
            <Droppable id='B' validate={['A']} label='droppable'>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable B</p>
            </Droppable>
          </Col>
        </Row>
      </Col>
    </Row>
  </DragAndDrop>
)

MultipleContainers.storyName = 'multiple containers'

export const MultipleDrags = () => (
  <DragAndDrop multipleDrags>
    <Row justify-content='center' align-items='center'>
      <Col xs='11' mm='10' md='9' lg='5' hd='5'>
        <GeneralDraggable addClass={css['c-general-container']}>
          <Draggable id='A1' label='Draggable item' disabledDefaultAttributes>
            <Button icon={{ name: 'open_with', size: 'big' }} label='draggable A1' />
          </Draggable>

          <Draggable id='B1' label='Draggable item' disabledDefaultAttributes>
            <Button icon={{ name: 'open_with', size: 'big' }} label='draggable B1' />
          </Draggable>
        </GeneralDraggable>
      </Col>
      <Col md='12'>
        <Row justify-content='center' align-items='center'>
          <Col xs='11' mm='10' md='9' lg='5' hd='4'>
            <Droppable id='A' validate={['A1', 'B1']} label='droppable'>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable A</p>
            </Droppable>
          </Col>

          <Col xs='11' mm='10' md='9' lg='5' hd='4'>
            <Droppable id='B' validate={['A1', 'B1']} label='droppable'>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable B</p>
            </Droppable>
          </Col>
        </Row>
      </Col>
    </Row>
  </DragAndDrop>
)

MultipleDrags.storyName = 'multiple drags'

export const WithValidation = () => {
  const [validate, setValidate] = useState({ validate: false, reboot: false })

  const [button, setButton] = useState({ check: true, reset: true })

  const [items, setItems] = useState([])

  const handleValidate = () => {
    setValidate((prev) => ({ ...prev, validate: true }))

    if (validate.reboot) {
      setValidate((prev) => ({ ...prev, reboot: false }))
    }

    if (items.length < 3) {
      return setButton({ check: true, reset: false })
    }

    setButton((prev) => ({ ...prev, check: true }))
  }

  const handleReboot = () => {
    setButton({ check: true, reset: true })
    setValidate({ validate: false, reboot: true })
  }

  useEffect(() => {
    if (items.length > 0) {
      setButton((prev) => ({ ...prev, check: false }))
    }
  }, [items])

  return (
    <DragAndDrop multipleDrags validate={validate.validate} onValidate={setItems} reboot={validate.reboot}>
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='6'>
          <GeneralDraggable addClass={css['c-general-container']}>
            <Draggable id='A1' label='Draggable first item' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ name: 'open_with', size: 'big' }} label='draggable A1' />
            </Draggable>

            <Draggable id='B1' label='Draggable second item' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ name: 'open_with', size: 'big' }} label='draggable B1' />
            </Draggable>

            <Draggable id='C1' label='Draggable third' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ name: 'open_with', size: 'big' }} label='draggable C1' />
            </Draggable>
          </GeneralDraggable>
        </Col>

        <Col md='12'>
          <Row justify-content='center' align-items='center'>
            <Col xs='11' mm='10' md='9' lg='5' hd='4'>
              <Droppable id='A' validate={['A1', 'C1']} label='droppable'>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable A - only accepts [A1, C1]</p>
              </Droppable>
            </Col>

            <Col xs='11' mm='10' md='9' lg='5' hd='4'>
              <Droppable id='B' validate={['B1']} label='droppable'>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable B - only accepts [B1]</p>
              </Droppable>
            </Col>
          </Row>
        </Col>

        <Col md='12'>
          <Row justify-content='center' align-items='center'>
            <Button label='validate' addClass='u-mx-2' onClick={handleValidate} disabled={button.check} />
            <Button label='reboot' onClick={handleReboot} disabled={button.reset} />
          </Row>
        </Col>
      </Row>
    </DragAndDrop>
  )
}

WithValidation.storyName = 'with validation'
