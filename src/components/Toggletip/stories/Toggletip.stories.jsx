import React from 'react'

import { Col, Row, Button, Toggletip } from '../../../components'

export default {
  title: 'ui-components/Toggletip',
  component: Toggletip,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          <Row justify-content='center' align-items='center' addClass='u-my-5' style={{ gap: '1rem' }}>
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

export const withArrow = () => (
  <Toggletip label='with arrow' placement='auto' hasArrow>
    <Button label='With arrow' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
  </Toggletip>
)

withArrow.storyName = 'with arrow'

export const isVisible = () => (
  <Toggletip label="It's always visible" placement='auto' hasArrow isVisible>
    <Button label='With arrow' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
  </Toggletip>
)

isVisible.storyName = 'always visible'

export const placement = () => (
  <>
    <Toggletip label='Auto' placement='auto'>
      <Button label='Auto' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Auto start' placement='auto-start'>
      <Button label='Auto-Start' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Auto end' placement='auto-end'>
      <Button label='Auto-End' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Top' placement='top'>
      <Button label='Top' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Top start' placement='top-start'>
      <Button label='Top-Start' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Top end' placement='top-end'>
      <Button label='Top-End' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Bottom' placement='bottom'>
      <Button label='Bottom' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Bottom start' placement='bottom-start'>
      <Button label='Bottom-Start' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Bottom end' placement='bottom-end'>
      <Button label='Bottom-End' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Right' placement='right'>
      <Button label='Right' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Right start' placement='right-start'>
      <Button label='Right-Start' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Right end' placement='right-end'>
      <Button label='Right-End' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Left' placement='left'>
      <Button label='Left' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Left start' placement='left-start'>
      <Button label='Left-Start' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>

    <Toggletip label='Left end' placement='left-end'>
      <Button label='Left-End' size='small' variant='secondary' style={{ borderRadius: '0.375rem' }} />
    </Toggletip>
  </>
)

placement.storyName = 'placement'
