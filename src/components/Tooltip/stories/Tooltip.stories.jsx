import React from 'react'

import { Col, Row, Button, Tooltip } from '../../../components'

export default {
  title: 'ui-components/Tooltip',
  component: Tooltip,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='6' hd='5'>
          <Row
            justify-content='center'
            align-items='center'
            addClass='u-my-5'
            style={{ gap: '1rem' }}
          >
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

export const withArrow = () => (
  <Tooltip label='with arrow' placement='auto' hasArrow>
    <Button
      label='With arrow'
      size='small'
      variant='secondary'
      style={{ borderRadius: '0.375rem' }}
    />
  </Tooltip>
)

withArrow.storyName = 'with arrow'

export const placement = () => (
  <>
    <Tooltip label='Auto' placement='auto'>
      <Button
        label='Auto'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Auto start' placement='auto-start'>
      <Button
        label='Auto-Start'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Auto end' placement='auto-end'>
      <Button
        label='Auto-End'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Top' placement='top'>
      <Button
        label='Top'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Top start' placement='top-start'>
      <Button
        label='Top-Start'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Top end' placement='top-end'>
      <Button
        label='Top-End'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Bottom' placement='bottom'>
      <Button
        label='Bottom'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Bottom start' placement='bottom-start'>
      <Button
        label='Bottom-Start'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Bottom end' placement='bottom-end'>
      <Button
        label='Bottom-End'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Right' placement='right'>
      <Button
        label='Right'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Right start' placement='right-start'>
      <Button
        label='Right-Start'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Right end' placement='right-end'>
      <Button
        label='Right-End'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Left' placement='left'>
      <Button
        label='Left'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Left start' placement='left-start'>
      <Button
        label='Left-Start'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>

    <Tooltip label='Left end' placement='left-end'>
      <Button
        label='Left-End'
        size='small'
        variant='secondary'
        style={{ borderRadius: '0.375rem' }}
      />
    </Tooltip>
  </>
)

placement.storyName = 'placement'
