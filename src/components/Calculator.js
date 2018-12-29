import React, { Component } from 'react'
import { connect } from 'react-redux'

import Person from './Person'
import CreatePerson from './CreatePerson'

class Calculator extends Component {

  state = {
    
  }

  componentDidMount() {
    
  }

  renderPersons() {
    const { persons } = this.props
    console.log(persons)
    return persons.map(person => <Person key={person.id} person={person}/>)
  }

  render() {
    return (
      <div>
        {this.renderPersons()}
        <CreatePerson />
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
  mapStateToProps
)(Calculator)