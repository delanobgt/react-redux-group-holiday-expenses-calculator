import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Form, FormGroup, Input } from 'reactstrap'

import * as modalActions from '../../actions/modal'

class ConfirmModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
  }

  handleTextChange = e => {
    this.setState({ inputText: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { yesCallback, hideInputModal } = this.props
    const { inputText } = this.state
    if (yesCallback) yesCallback(inputText)
    hideInputModal()
  }

  handleNoClick = () => {
    const { noCallback, hideInputModal } = this.props
    if (noCallback) noCallback()
    hideInputModal()
  }

  render() {
    const { message } = this.props
    const { inputText } = this.state
    const showModal = Boolean(message)
    const closeBtn = <button className="close" onClick={this.handleNoClick}>&times;</button>
    return (
    <div>
      <Modal isOpen={showModal} toggle={this.handleNoClick} className={this.props.className}>
        <ModalHeader toggle={this.handleNoClick} close={closeBtn}>Input</ModalHeader>
        <Form onSubmit={this.handleFormSubmit}>
          <ModalBody>
            {message}
            <FormGroup>
              <Input type="text" value={inputText} onChange={this.handleTextChange} required/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Okay</Button>{' '}
            <Button color="secondary" onClick={this.handleNoClick}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.modal.inputModal
  }
}

export default connect(
  mapStateToProps,
  { ...modalActions }
)(ConfirmModal)