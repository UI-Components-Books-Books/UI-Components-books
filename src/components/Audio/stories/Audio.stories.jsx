import React from 'react'

import { Audio } from '../../../components'

export default {
  title: 'ui-components/Audio',
  component: Audio,
  decorators: [
    (story) => (
      <div>{story()}</div>
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
