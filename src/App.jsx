import { Button, Col, Row } from '@components'

function App() {
  return (
    <Row>
      <Col>
        <h1>UI-components</h1>
        <Button addClass='animate__animated animate__bounce' icon={{ name: 'play' }} />
      </Col>
    </Row>
  )
}

export { App }
