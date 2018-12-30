import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron } from 'reactstrap'

import { formatRupiah } from '../helper'

class JumbotronDisplay extends Component {
  render() {
    const { persons } = this.props
    const totalExpense = _.chain(persons)
      .flatMap(person => person.expenses)
      .reduce((acc, expense) => acc + parseInt(expense.value), 0)
      .value()
    return (
      <Jumbotron className="mt-2 mb-2">
        <h3 className="display-5">Group Holiday Expenses Calculator</h3>
        <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>Number of Person: {persons.length}</p>
        <p>Total expenses: {formatRupiah(totalExpense)}</p>
        <p>Must pay per Person: {formatRupiah((totalExpense / persons.length) || 0)}</p>
      </Jumbotron>
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
)(JumbotronDisplay)
