import React from 'react'

import { Col, Row, Audio } from '../../../components'

export default {
  title: 'ui-components/Audio',
  component: Audio,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          <Row display='flex' justify-content='center' align-items='center'>
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

const Template = (args) => <Audio {...args} />

export const Default = Template.bind({})

Default.storyName = 'default'
Default.args = {
  src: 'https://mdn.github.io/learning-area/accessibility/multimedia/viper.mp3',
  format: 'audio/mp3'
}

export const small = Template.bind({})

small.storyName = 'small'
small.args = {
  ...Default.args,
  size: 'small'
}

export const ButtonAudio = Template.bind({})

ButtonAudio.storyName = 'button'
ButtonAudio.args = {
  ...Default.args,
  type: 'Button'
}

export const Interaction = Template.bind({})

Interaction.storyName = 'interaction'
Interaction.args = {
  ...Default.args,
  type: 'Button'
}
