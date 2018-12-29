import React, { Component } from 'react'
import { Container, Col, Jumbotron, Row } from 'reactstrap'

import Calculator from './Calculator'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron className="mt-4 mb-4">
              <h3 className="display-5">Group Holiday Expenses Calculator</h3>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            </Jumbotron>

            <Calculator />
          </Col>
        </Row>
      </Container>
    )
  }
}
