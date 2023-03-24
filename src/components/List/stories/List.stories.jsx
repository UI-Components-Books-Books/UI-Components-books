import React from 'react'

import {
  Col,
  Row,
  Icon,
  List,
  ListItem,
  OrderedList,
  UnorderedList
} from '../../../components'

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
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
  </OrderedList>
)
Ordered.storyName = 'ordered'

export const Unordered = () => (
  <UnorderedList>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
  </UnorderedList>
)
Unordered.storyName = 'unordered'

export const Unstyle = () => (
  <List>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
  </List>
)
Unstyle.storyName = 'unstyle'

export const UnstyleWithIcon = () => (
  <List>
    <ListItem>
      <Icon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48'
          width='48'
          viewBox='0 0 48 48'
        >
          <path
            id='check'
            d='M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z'
          />
        </svg>
      </Icon>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      <Icon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48'
          width='48'
          viewBox='0 0 48 48'
        >
          <path id='play' d='M16 37.85v-28l22 14Z' />
        </svg>
      </Icon>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
    <ListItem>
      <Icon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48'
          width='48'
          viewBox='0 0 48 48'
        >
          <path
            id='fullscreen_exit'
            d='M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z'
          />
        </svg>
      </Icon>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </ListItem>
  </List>
)
UnstyleWithIcon.storyName = 'unstyle with icon'
