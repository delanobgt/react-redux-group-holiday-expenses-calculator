import React, { Component, Fragment } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Form, FormGroup, Input } from 'reactstrap'
import { MdDelete } from 'react-icons/md'
import { connect } from 'react-redux'

import { formatRupiah } from '../helper'
import * as personActions from '../actions/person'
import * as modalActions from '../actions/modal'

class Expense extends Component {

  constructor(props) {
    super(props)
    const personId = props.person.id
    const { id, value, info } = props.expense
    this.state = {
      personId, 
      id,
      value,
      info,
      editting: false,
    }
  }

  handleTextChange = name => e => {
    this.setState({ [name]: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { personId, id, info, value } = this.state
    const cleanedInfo = info.trim()
    const cleanedValue = value.replace(/^0+/g, '')
    this.props.updateExpense(personId, id, { info: cleanedInfo, value: cleanedValue })
    this.setState({ info: cleanedInfo, value: cleanedValue })
    this.setState({ editting: false })
  }

  handleCancelClick = e => {
    e.preventDefault()
    const { value, info } = this.props.expense
    this.setState({ value, info, editting: false })
  }

  handleEditClick = e => {
    e.preventDefault()
    this.setState({ editting: true })
  }

  handleDeleteClick = e => {
    e.preventDefault()
    const { personId, id, info, value } = this.props.expense
    this.props.showConfirmModal(
      { 
        message: <div>Delete <span className="text-primary">{info} ({value})</span>?</div>,
        yesCallback: () => this.props.deleteExpense(personId, id)
      }
    )
  }

  render() {
    const { info, value, editting } = this.state
    const { orderNumber } = this.props
    return (
      <div className="mb-4">
        <Card>
          <CardBody>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup row>
                <Col sm={3}>
                  Expense - {orderNumber}
                </Col>
                <Col sm={3}>
                  <Input
                    placeholder="Info"
                    readOnly={!editting}
                    onChange={this.handleTextChange('info')}
                    value={info}
                    className="mb-2"
                  />
                </Col>
                <Col sm={3}>
                  <Input
                    placeholder="Value"
                    type={ editting ? 'number' : 'text' }
                    readOnly={!editting}
                    onChange={this.handleTextChange('value')}
                    value={ editting ? value : formatRupiah(+value) }
                    className="mb-2"
                  />
                </Col>
                <Col sm={3} className="text-right">
                  <div>
                    {
                      editting ? (
                        <Fragment>
                          <Button type="submit" color="success" className="mb-1" outline>Save</Button>
                          <Button type="button" color="danger" className="mb-1 ml-1" outline onClick={this.handleCancelClick}>Cancel</Button>
                        </Fragment>
                      ) : (
                        <Button type="button" color="primary" className="mb-1" outline onClick={this.handleEditClick}>Edit</Button>
                      )
                    }
                    <Button type="button" color="danger" outline className="mb-1 ml-1" onClick={this.handleDeleteClick}>
                      <MdDelete />
                    </Button>
                  </div>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default connect(
  null,
  { ...personActions, ...modalActions }
)(Expense)