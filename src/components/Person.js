import React, { Component, Fragment } from 'react'
import { Button, Card, CardBody, Collapse, Col } from 'reactstrap'
import { Form, FormGroup, Input, Label } from 'reactstrap'
import { InputGroup, InputGroupAddon } from 'reactstrap'
import { MdDelete, MdExpandMore, MdExpandLess, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { connect } from 'react-redux'

import Expense from './Expense'
import CreateExpense from './CreateExpense'
import * as personActions from '../actions/person'

class Person extends Component {

  constructor(props) {
    super(props)
    const { id, fullname } = props.person
    this.state = {
      id,
      fullname,
      collapseOpen: false,
      editting: false,
    }
  }

  handleTextChange = e => {
    this.setState({ fullname: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { id, fullname } = this.state
    const cleanedFullname = fullname.trim()
    this.props.updatePerson(id, { fullname: cleanedFullname })
    this.setState({ fullname: cleanedFullname })
    this.setState({ editting: false })
  }

  handleCancelClick = e => {
    e.preventDefault()
    const { fullname } = this.props.person
    this.setState({ fullname, editting: false })
  }

  handleEditClick = e => {
    e.preventDefault()
    this.setState({ editting: true })
  }

  handleDeleteClick = e => {
    e.preventDefault()
    const { id } = this.state
    this.props.deletePerson(id)
  }

  handleMoveUpClick = e => {
    e.preventDefault()
    const { id } = this.state
    this.props.moveUpPerson(id)
  }

  handleMoveDownClick = e => {
    e.preventDefault()
    const { id } = this.state
    this.props.moveDownPerson(id)
  }

  toggleCollapse = () => {
    this.setState(state => ({ collapseOpen: !state.collapseOpen }))
  }

  renderExpenses() {
    const { person } = this.props
    return person.expenses.map((expense, index) => 
      <Expense key={expense.id} person={person} expense={expense} orderNumber={index + 1}/>
    )
  }

  render() {
    const { fullname, editting, collapseOpen } = this.state
    const { topmost, bottommost } = this.props
    return (
      <div className="mb-4">
        <Card>
          <CardBody>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup row>
                <Col sm={8}>
                  <Label>Full Name</Label>
                  <InputGroup>
                    <Input
                      placeholder="Full Name"
                      readOnly={!editting}
                      onChange={this.handleTextChange}
                      value={fullname}
                    />
                    <InputGroupAddon addonType="append">
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
                    </InputGroupAddon>
                  </InputGroup>
                </Col>

                <Col sm={4} className="text-right">
                  <Button type="button" color="danger" outline className="ml-1" onClick={this.handleDeleteClick}>
                    <MdDelete />
                  </Button>
                  <Button type="button" color="primary" outline disabled={topmost} className="ml-1" onClick={this.handleMoveUpClick}>
                    <MdArrowDropUp />
                  </Button>
                  <Button type="button" color="primary" outline disabled={bottommost} className="ml-1" onClick={this.handleMoveDownClick}>
                    <MdArrowDropDown />
                  </Button>
                  <Button type="button" color="primary" outline className="ml-1" onClick={this.toggleCollapse}>
                    { collapseOpen ? <MdExpandLess /> : <MdExpandMore /> }
                  </Button>
                </Col>
              </FormGroup>
            </Form>

            <Collapse isOpen={collapseOpen}>
              <p>List of Expenses</p>
              {this.renderExpenses()}
              <CreateExpense person={this.props.person} />
            </Collapse>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default connect(
  null,
  { ...personActions }
)(Person)