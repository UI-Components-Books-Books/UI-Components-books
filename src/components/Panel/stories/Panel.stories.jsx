import React from 'react'

import {
  Col,
  Row,
  Button,
  Panel,
  Section,
  NavSection,
  ButtonSection
} from '../../../components'

export default {
  title: 'ui-components/Panel',
  component: Panel,
  decorators: [
    (story) => (
      <Row display='flex' justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='7' hd='6'>
          <Row
            display='flex'
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

export const Default = () => (
  <Panel>
    <NavSection />

    <Section>First section</Section>
    <Section>Second section</Section>
    <Section>Third section</Section>
    <Section>Fourth section</Section>
  </Panel>
)

Default.storyName = 'default'

export const WithButton = () => (
  <Panel>
    <NavSection showNextButton showPrevButton />

    <Section>First section</Section>
    <Section>Second section </Section>
    <Section>Third section </Section>
    <Section>Fourth section </Section>
  </Panel>
)

WithButton.storyName = 'with buttons'

export const WithDefautlIndex = () => (
  <Panel defaultIndex={3}>
    <NavSection />

    <Section>First section</Section>
    <Section>Second section</Section>
    <Section>Third section</Section>
    <Section>Fourth section </Section>
  </Panel>
)

WithDefautlIndex.storyName = 'with default index'

export const WithButtonSection = () => (
  <Panel>
    <NavSection />

    <Section>
      First section
      <ButtonSection section={2}>
        <Button
          label='Go to the second section'
          addClass='u-my-4'
          size='small'
          style={{ borderRadius: '0.375rem' }}
        />
      </ButtonSection>
    </Section>

    <Section>Second section </Section>

    <Section>
      Third section
      <ButtonSection section={1}>
        <Button
          label='Go to the first section'
          addClass='u-my-4'
          size='small'
          style={{ borderRadius: '0.375rem' }}
        />
      </ButtonSection>
    </Section>

    <Section>Fourth section </Section>
  </Panel>
)

WithButtonSection.storyName = 'with button section'
