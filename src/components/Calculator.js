import React, { Component } from 'react'
import * as exampleActions from '../actions/example'

export default class App extends Component {

  state = {

  }

  componentDidMount() {
    exampleActions.getExample(error => {
      // callback code
    })
  }

  render() {
    return (
      <div>React simple starter</div>
    )
  }
}
