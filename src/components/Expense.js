import React, { Component, Fragment } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Form, FormGroup, Input } from 'reactstrap'
import { MdDelete } from 'react-icons/md'
import { connect } from 'react-redux'

import * as personActions from '../actions/person'

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
    const { personId, id } = this.state
    this.props.deleteExpense(personId, id)
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
                  />
                </Col>
                <Col sm={3}>
                  <Input
                    placeholder="Value"
                    type="number"
                    readOnly={!editting}
                    onChange={this.handleTextChange('value')}
                    value={value}
                  />
                </Col>
                <Col sm={3} className="text-right">
                  <div>
                    {
                      editting ? (
                        <Fragment>
                          <Button type="submit" color="success" outline>Save</Button>
                          <Button type="button" color="danger" outline onClick={this.handleCancelClick}>Cancel</Button>
                        </Fragment>
                      ) : (
                        <Button type="button" color="primary" outline onClick={this.handleEditClick}>Edit</Button>
                      )
                    }
                    <Button type="button" color="danger" outline className="ml-1" onClick={this.handleDeleteClick}>
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
  { ...personActions }
)(Expense)