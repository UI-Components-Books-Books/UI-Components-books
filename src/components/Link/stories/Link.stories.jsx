import React from 'react'

import { Col, Row, Link } from '../../../components'

export default {
  title: 'ui-components/Link',
  component: Link,
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

const Template = (args) => <Link {...args}>UI-components</Link>

export const Default = Template.bind({})

Default.storyName = 'default'

export const ExternalLink = Template.bind({})

ExternalLink.args = {
  isExternal: true,
  label: 'External link'
}
ExternalLink.storyName = 'external link'
