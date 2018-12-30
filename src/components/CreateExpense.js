import React, { Component } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { connect } from 'react-redux'

import * as personActions from '../actions/person'

class CreateExpense extends Component {

  state = {
    info: '',
    value: 0
  }

  handleTextChange = name => e => {
    this.setState({ [name]: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { person, createExpense } = this.props
    const { info, value } = this.state
    const cleanedInfo = info.trim()
    const cleanedValue = value.replace(/^0+/g, '')
    createExpense(person.id, { info: cleanedInfo, value: cleanedValue })
    this.setState({ info: '', value: 0 })
  }

  render() {
    const { info, value } = this.state

    return (
      <div>
        <Card>
          <CardBody>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup row>
                <Col sm={2}>
                  <Label>Add Expense</Label>
                </Col>
                <Col sm={4}>
                  <Input 
                    placeholder="Info"
                    value={info}
                    onChange={this.handleTextChange('info')}
                    required={true}
                  />
                </Col>
                <Col sm={4}>
                  <Input 
                    placeholder="Value"
                    type="number"
                    value={value}
                    onChange={this.handleTextChange('value')}
                    required={true}
                  />
                </Col>
                <Col sm={2} className="text-right">
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
)(CreateExpense)
