import React from 'react'
import { Video } from '../../Video'

export default {
  title: 'ui-components/Video',
  component: Video
}

const Template = (args) => <Video {...args} />

export const Default = Template.bind({})

Default.args = {
  src: {
    video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    caption: '/assets/others/video.vtt'
  },
  width: '1000',
  description: {
    title: 'Video 1',
    content: 'Video de prueba'
  }
}

Default.storyName = 'default'
