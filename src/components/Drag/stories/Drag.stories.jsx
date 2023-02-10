import React, { useState, useReducer } from 'react'

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
            <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable' />
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
            <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable' />
          </Draggable>
        </GeneralDraggable>
      </Col>
      <Col md='12'>
        <Row justify-content='center' align-items='center'>
          <Col xs='11' mm='10' md='9' lg='5' hd='4'>
            <Droppable id='A' validate={['A']} label='droppable'>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable aA</p>
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
            <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable A1' />
          </Draggable>

          <Draggable id='B1' label='Draggable item' disabledDefaultAttributes>
            <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable B1' />
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

export const WithValidationMultipleDrags = () => {
  const [drags, setDrags] = useState([])

  const [activity, updatedActivity] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    { checkButton: true, resetButton: true, isValidate: false, isReboot: false }
  )

  const addNewDrag = ({ validate: drags, active }) => {
    const newListDrags = [...drags]

    if (active && activity.checkButton) {
      updatedActivity({ checkButton: !activity.checkButton })
    }

    setDrags(newListDrags)
  }

  const handleValidate = () => {
    const TOTAL_CORRECTS_DRAGS = 3

    updatedActivity({
      isValidate: !activity.isValidate,
      button: !activity.checkButton
    })

    if (drags.length !== TOTAL_CORRECTS_DRAGS) {
      updatedActivity({ resetButton: !activity.resetButton })
    }
  }

  const handleReboot = () => updatedActivity({ checkButton: true, resetButton: true, isValidate: false, isReboot: false })

  return (
    <DragAndDrop multipleDrags validate={activity.isValidate} onValidate={addNewDrag} reboot={activity.isReboot}>
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='6'>
          <GeneralDraggable addClass={css['c-general-container']}>
            <Draggable id='A1' label='Draggable first item' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable A1' />
            </Draggable>

            <Draggable id='B1' label='Draggable second item' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable B1' />
            </Draggable>

            <Draggable id='C1' label='Draggable third' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable C1' />
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
            <Button
              label='validate' addClass='u-mx-2'
              onClick={handleValidate}
              disabled={activity.checkButton}
            />
            <Button label='reboot' onClick={handleReboot} disabled={activity.resetButton} />
          </Row>
        </Col>
      </Row>
    </DragAndDrop>
  )
}

WithValidationMultipleDrags.storyName = 'with validation multiple drags'

export const WithValidationAlone = () => {
  const [drags, setDrags] = useState([])

  const [activity, updatedActivity] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    { checkButton: true, resetButton: true, isValidate: false, isReboot: false }
  )

  const addNewDrag = ({ validate: drags, active }) => {
    const newListDrags = [...drags]

    if (active && activity.checkButton) {
      updatedActivity({ checkButton: !activity.checkButton })
    }

    setDrags(newListDrags)
  }

  const handleValidate = () => {
    const TOTAL_CORRECTS_DRAGS = 3

    updatedActivity({
      isValidate: !activity.isValidate,
      button: !activity.checkButton
    })

    if (drags.length !== TOTAL_CORRECTS_DRAGS) {
      updatedActivity({ resetButton: !activity.resetButton })
    }
  }

  const handleReboot = () => updatedActivity({ checkButton: true, resetButton: true, isValidate: false, isReboot: false })

  return (
    <DragAndDrop validate={activity.isValidate} onValidate={addNewDrag} reboot={activity.isReboot}>
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='6'>
          <GeneralDraggable addClass={css['c-general-container']}>
            <Draggable id='A1' label='Draggable first item' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable A1' />
            </Draggable>

            <Draggable id='B1' label='Draggable second item' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable B1' />
            </Draggable>

            <Draggable id='C1' label='Draggable third' addClass={css['c-draggable']} disabledDefaultAttributes>
              <Button icon={{ path: '/assets/icons/svg/open_with.svg', size: 'big' }} label='draggable C1' />
            </Draggable>
          </GeneralDraggable>
        </Col>

        <Col md='12'>
          <Row justify-content='center' align-items='center'>
            <Col xs='11' mm='10' md='9' lg='5' hd='4'>
              <Droppable id='A' validate={['A1']} label='droppable'>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable A - only accepts [A1]</p>
              </Droppable>
            </Col>

            <Col xs='11' mm='10' md='9' lg='5' hd='4'>
              <Droppable id='B' validate={['B1']} label='droppable'>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable B - only accepts [B1]</p>
              </Droppable>
            </Col>

            <Col xs='11' mm='10' md='9' lg='5' hd='4'>
              <Droppable id='C' validate={['C1']} label='droppable'>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--clr-neutral-500)' }}>Droppable C - only accepts [C1]</p>
              </Droppable>
            </Col>
          </Row>
        </Col>

        <Col md='12'>
          <Row justify-content='center' align-items='center'>
            <Button
              label='validate' addClass='u-mx-2'
              onClick={handleValidate}
              disabled={activity.checkButton}
            />
            <Button label='reboot' onClick={handleReboot} disabled={activity.resetButton} />
          </Row>
        </Col>
      </Row>
    </DragAndDrop>
  )
}

WithValidationAlone.storyName = 'with validation alone'
