import React from 'react'

import { Col, Row, Icon, List, ListItem, OrderedList, UnorderedList } from '../../../components'

export default {
  title: 'ui-components/List',
  components: List,
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

export const Ordered = () => (
  <OrderedList>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
  </OrderedList>
)
Ordered.storyName = 'ordered'

export const Unordered = () => (
  <UnorderedList>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
  </UnorderedList>
)
Unordered.storyName = 'unordered'

export const Unstyle = () => (
  <List>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
  </List>
)
Unstyle.storyName = 'unstyle'

export const UnstyleWithIcon = () => (
  <List>
    <ListItem>
      <Icon name='close' />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      <Icon name='check' />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      <Icon name='play' />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
  </List>
)
UnstyleWithIcon.storyName = 'unstyle with icon'
