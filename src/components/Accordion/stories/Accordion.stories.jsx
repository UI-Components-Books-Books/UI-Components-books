import React from 'react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Col, Row, Icon, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '../../../components'

export default {
  title: 'ui-components/Accordion',
  component: Accordion,
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

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const Template = (args) => (
  <Accordion {...args}>
    <AccordionItem>
      <AccordionButton>Section 1 title</AccordionButton>
      <AccordionPanel>
        <p>First text: {lorem}</p>
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <AccordionButton>Section 2 title</AccordionButton>
      <AccordionPanel>
        <p>Second text: {lorem}</p>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

const TemplateAccordionButton = (args) => (
  <Accordion>
    <AccordionItem>
      <AccordionButton {...args}>Section</AccordionButton>
      <AccordionPanel>
        <p>{lorem}</p>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

export const Default = Template.bind({})

Default.storyName = 'default'
Default.args = {
  defaultIndex: 0
}

export const AllowMultiple = Template.bind({})

AllowMultiple.storyName = 'allow multiple'
AllowMultiple.args = {
  allowMultiple: true,
  defaultIndex: [0]
}

export const StylingExpanded = TemplateAccordionButton.bind({})

StylingExpanded.storyName = 'styling expanded state'
StylingExpanded.args = {
  expanded: 'u-bg-success-300'
}

export const WithRenderIcon = TemplateAccordionButton.bind({})

WithRenderIcon.storyName = 'using render prop with icon'
WithRenderIcon.args = {
  icon: function (isExpanded) {
    return isExpanded ? <Icon path='/assets/icons/svg/check.svg' /> : <Icon path='/assets/icons/svg/close.svg' />
  }
}

export const Interaction = Template.bind({})
Interaction.args = {
  ...Default.args
}

Interaction.play = async ({ canvasElement }) => {
  const screen = within(canvasElement)

  await userEvent.click(screen.getByText(/Section 2 title/i))
  expect(screen.getByText(`Second text: ${lorem}`)).toBeVisible()

  await userEvent.click(screen.getByText(/Section 1 title/i))
  expect(screen.getByText(`First text: ${lorem}`)).toBeVisible()
}

Interaction.storyName = 'interactions'
