import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import JumbotronDisplay from './JumbotronDisplay'
import DownloadBox from './DownloadBox'
import Calculator from './Calculator'
import ConfirmModal from './modals/ConfirmModal'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <JumbotronDisplay />
              <DownloadBox />
              <Calculator />
            </Col>
          </Row>
        </Container>

        <ConfirmModal />
      </Fragment>
    )
  }
}
