import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { IconContext } from 'react-icons'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <IconContext.Provider value={{ size: '1.5em' }}>
      <App />
    </IconContext.Provider>
  </Provider>,
  document.querySelector('#root')
)
