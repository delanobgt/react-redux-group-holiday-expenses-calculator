import _ from 'lodash'
import { 
  EXAMPLE_EMPTY,
  EXAMPLE_GET,
  EXAMPLE_CREATE,
  EXAMPLE_UPDATE,
  EXAMPLE_DELETE
} from '../actions/example'

const INITIAL_STATE = {
  exampleState: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EXAMPLE_EMPTY: {
      return { ...state, exampleState: [] }
    }
    case EXAMPLE_GET: {
      return { 
        ...state, 
        exampleState: _.map([], e => e)
      }
    }
    case EXAMPLE_CREATE: {
      return { 
        ...state, 
        exampleState: []
      }
    }
    case EXAMPLE_UPDATE: {
      return { 
        ...state, 
        exampleState: []
      }
    }
    case EXAMPLE_DELETE: {
      return { 
        ...state, 
        exampleState: []
      }
    }
    default: {
      return state
    }
  }
}
