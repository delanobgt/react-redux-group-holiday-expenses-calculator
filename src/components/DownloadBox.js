import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import fileDownload from 'js-file-download'

class DownloadBox extends Component {

  handleDownloadClick = () => {
    const { persons } = this.props
    const data = JSON.stringify(persons, 2, 2)
    fileDownload(data, 'persons.json')
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
        <Button outline color="warning" className="ml-1">Load from JSON</Button>
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
  null
)(DownloadBox)
