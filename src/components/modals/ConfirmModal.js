import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import * as modalActions from '../../actions/modal'

class ConfirmModal extends React.Component {
  handleYesClick = () => {
    const { yesCallback, hideConfirmModal } = this.props
    if (yesCallback) yesCallback()
    hideConfirmModal()
  }

  handleNoClick = () => {
    const { biCallback, hideConfirmModal } = this.props
    if (biCallback) biCallback()
    hideConfirmModal()
  }

  render() {
    const { message } = this.props
    const showModal = Boolean(message)
    const closeBtn = <button className="close" onClick={this.handleNoClick}>&times;</button>
    return (
    <div>
      <Modal isOpen={showModal} toggle={this.handleNoClick} className={this.props.className}>
        <ModalHeader toggle={this.handleNoClick} close={closeBtn}>Confirmation</ModalHeader>
        <ModalBody>
          {message}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleYesClick}>Okay</Button>{' '}
          <Button color="secondary" onClick={this.handleNoClick}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.modal.confirmModal
  }
}

export default connect(
  mapStateToProps,
  { ...modalActions }
)(ConfirmModal)