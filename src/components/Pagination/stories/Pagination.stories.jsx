import React from 'react'

import { Col, Row, Pagination, PaginationItem } from '../../../components'

export default {
  title: 'ui-components/Pagination',
  component: Pagination,
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

export const Default = () => <Pagination count={10} />

Default.storyName = 'default'

export const WithMoreButtons = () => <Pagination count={10} showLastButton showFirstButton />

WithMoreButtons.storyName = 'with more buttons'

export const WithIcon = () => (
  <Pagination
    count={10}
    showLastButton
    showFirstButton
    renderItem={(item) => (
      <PaginationItem {...item} icons={{ previous: '/assets/icons/svg/arrow_drop_down.svg', next: '/assets/icons/svg/arrow_drop_down.svg', last: '/assets/icons/svg/volume_off.svg', first: '/assets/icons/svg/volume_on.svg' }} />
    )}
  />
)

WithIcon.storyName = 'with other icons'
