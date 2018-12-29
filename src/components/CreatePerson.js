import React, { Component } from 'react'
import { Button, Card, CardBody, CardText, Collapse, Col } from 'reactstrap'
import { Form, FormGroup, Input } from 'reactstrap'
import { InputGroup, Label } from 'reactstrap'
import { MdDelete, MdExpandMore, MdExpandLess, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { connect } from 'react-redux'

import * as personActions from '../actions/person'


class CreatePerson extends Component {

  state = {
    fullname: ''
  }

  handleTextChange = e => {
    this.setState({ fullname: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { createPerson } = this.props
    const { fullname } = this.state
    createPerson({ fullname })
    this.setState({ fullname: '' })
  }

  render() {
    const { fullname } = this.state

    return (
      <div className="mb-5">
        <Card>
          <CardBody>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup row>
                <Col sm={8}>
                  <Label >Add Person</Label>
                  <Input 
                    placeholder="Full Name"
                    value={fullname}
                    onChange={this.handleTextChange}
                    required={true}
                  />
                </Col>
                <Col sm={4} className="text-right">
                  <Button type="submit" color="primary">Add</Button>
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
)(CreatePerson)