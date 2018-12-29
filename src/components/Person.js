import React, { Component, Fragment } from 'react'
import { Button, Card, CardBody, CardText, Collapse, Col } from 'reactstrap'
import { Form, FormGroup, Input } from 'reactstrap'
import { InputGroup, InputGroupAddon } from 'reactstrap'
import { MdDelete, MdExpandMore, MdExpandLess, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { connect } from 'react-redux'

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
    personActions.updatePerson(id, { fullname })
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
    console.log('lol')
    e.preventDefault()
    const { id } = this.state
    personActions.deletePerson(id)
  }

  handleMoveUpClick = e => {
    e.preventDefault()
    const { id } = this.state
    personActions.moveUpPerson(id)
  }

  handleMoveDownClick = e => {
    e.preventDefault()
    const { id } = this.state
    personActions.moveDownPerson(id)
  }

  toggleCollapse = () => {
    this.setState(state => ({ collapseOpen: !state.collapseOpen }))
  }

  render() {
    const { fullname, editting, collapseOpen } = this.state
    return (
      <div className="mb-4">
        <Card>
          <CardBody>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup row>
                <Col sm={8}>
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
                            <Button type="submit" color="secondary" outline>Save</Button>
                            <Button type="button" color="secondary" outline onClick={this.handleCancelClick}>Cancel</Button>
                          </Fragment>
                        ) : (
                          <Button type="button" color="secondary" outline onClick={this.handleEditClick}>Edit</Button>
                        )
                      }
                    </InputGroupAddon>
                  </InputGroup>
                </Col>

                <Col sm={4} className="text-right">
                  <Button type="button" color="link" onClick={this.handleDeleteClick}>
                    <MdDelete />
                  </Button>
                  <Button type="button" color="link" onClick={this.handleMoveUpClick}>
                    <MdArrowDropUp />
                  </Button>
                  <Button type="button" color="link" onClick={this.handleMoveUpClick}>
                    <MdArrowDropDown />
                  </Button>
                  <Button type="button" color="link" onClick={this.toggleCollapse}>
                    { collapseOpen ? <MdExpandLess /> : <MdExpandMore /> }
                  </Button>
                </Col>
              </FormGroup>
            </Form>

            <CardText>
              Paid 40.000
            </CardText>

            <Collapse isOpen={collapseOpen}>
              Collapse me.
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