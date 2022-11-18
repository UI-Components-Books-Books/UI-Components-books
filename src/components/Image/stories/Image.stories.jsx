import React from 'react'

import { Col, Row, Image } from '../../../components'

export default {
  title: 'ui-components/Image',
  component: Image,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='6' hd='5'>
          {story()}
        </Col>
      </Row>
    )
  ]
}

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  width: '350'
}
Default.storyName = 'default'

export const noCaption = Template.bind({})
noCaption.args = {
  ...Default.args,
  noCaption: true
}
noCaption.storyName = 'without caption'

export const otherImage = Template.bind({})
otherImage.args = {
  ...Default.args,
  url: 'https://images.pexels.com/photos/1545346/pexels-photo-1545346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Autumn season.',
  title: 'Photography 1.'
}
otherImage.storyName = 'with image'
