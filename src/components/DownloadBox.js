import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import fileDownload from 'js-file-download'
import FileInput from 'react-simple-file-input'

import * as modalActions from '../actions/modal'
import * as personActions from '../actions/person'

class DownloadBox extends Component {

  constructor(props) {
    super(props)
    this.fileInputRef = React.createRef()
  }

  handleDownloadClick = () => {
    const { persons, showInputModal } = this.props
    const data = JSON.stringify(persons, 2, 2)
    showInputModal(
      {
        message: 'Please enter a filename',
        yesCallback: (filename) => fileDownload(data, `${filename}.json`)
      }
    )
  }

  handleFileSelected = (event) => {
    const fileContents = event.target.result
    try {
      this.props.loadPerson(JSON.parse(fileContents))
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="text-right mt-3 mb-3">
        <Button 
          outline 
          color="success"
          onClick={this.handleDownloadClick}
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
          className="ml-1"
          onClick={() => document.querySelector('input[type=file]').click()}
        >
          Load from JSON
        </Button>
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
