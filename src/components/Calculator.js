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
    return persons.map((person, index) => 
      <Person 
        key={person.id} 
        person={person} 
        topmost={index === 0} 
        bottommost={index === persons.length - 1}
      />
    )
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