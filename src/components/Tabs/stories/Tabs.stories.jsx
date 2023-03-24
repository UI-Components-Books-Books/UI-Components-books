import React from 'react'

import {
  Col,
  Row,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel
} from '../../../components'

export default {
  title: 'ui-components/Tabs',
  component: Tabs,
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

const Template = (args) => (
  <Tabs {...args}>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>First panel 1️⃣</TabPanel>
      <TabPanel>Second panel 2️⃣</TabPanel>
      <TabPanel>Third panel 3️⃣</TabPanel>
    </TabPanels>
  </Tabs>
)

const TemplateTab = (args) => (
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab {...args}>Two</Tab>
      <Tab>Three</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>First panel 1️⃣</TabPanel>
      <TabPanel>Second panel 2️⃣</TabPanel>
      <TabPanel>Third panel 3️⃣</TabPanel>
    </TabPanels>
  </Tabs>
)

export const Default = Template.bind({})

Default.storyName = 'default'
Default.args = {
  defaultIndex: 0
}

export const StylingSelected = TemplateTab.bind({})

StylingSelected.storyName = 'styling selected state'
StylingSelected.args = {
  selected: 'u-bg-success-300'
}

export const WithRenderIcon = TemplateTab.bind({})

WithRenderIcon.storyName = 'using render prop with icon'
WithRenderIcon.args = {
  icon: function (isSelected) {
    return isSelected ? '🥳' : '😥'
  }
}
