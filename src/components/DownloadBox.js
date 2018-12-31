import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'reactstrap'
import fileDownload from 'js-file-download'
import FileInput from 'react-simple-file-input'

import * as modalActions from '../actions/modal'
import * as personActions from '../actions/person'

class DownloadBox extends Component {

  constructor(props) {
    super(props)
    this.fileInputRef = React.createRef()
  }

  handleResetClick = () => {
    const { emptyPerson, showConfirmModal } = this.props
    showConfirmModal(
      {
        message: 'Reset calculator?',
        yesCallback: () => emptyPerson()
      }
    )
  }

  handleDownloadClick = () => {
    const { persons, showInputModal } = this.props
    const data = JSON.stringify(persons, 2, 2)
    showInputModal(
      {
        message: 'Please enter a filename',
        yesCallback: (filename) => fileDownload(data, `${filename.trim()}.json`)
      }
    )
  }

  handleFileSelected = (event) => {    
    const { emptyPerson, loadPerson } = this.props
    const fileContents = event.target.result
    try {
      emptyPerson()
      loadPerson(JSON.parse(fileContents))
    } catch (error) {
      console.log(error)
    } finally {
      document.querySelector('input[type=file]').value = null
    }
  }

  render() {
    return (
      <div className="mt-3 mb-3">
        <Row>
          <Col sm={3}>
            <Button 
              outline 
              color="danger"
              onClick={this.handleResetClick}
              className="mb-2"
            >
              Reset Calculator
            </Button>
          </Col>
          <Col sm={9} className="text-right">
            <Button 
              outline 
              color="success"
              onClick={this.handleDownloadClick}
              className="mb-2"
            >
              Download as JSON
            </Button>
            <FileInput 
              readAs='text'
              onLoad={this.handleFileSelected}
              accept=".json"
              style={{ display: 'none' }}
            />
            <Button 
              outline 
              color="warning" 
              className="ml-1 mb-2"
              onClick={() => document.querySelector('input[type=file]').click()}
            >
              Load from JSON
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    persons: state.person.persons
  }
}

export default connect(
  mapStateToProps,
  { ...modalActions, ...personActions }
)(DownloadBox)
