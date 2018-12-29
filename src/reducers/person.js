import _ from 'lodash'
import { 
  PERSON_EMPTY,
  PERSON_GET,
  PERSON_CREATE,
  PERSON_UPDATE,
  PERSON_DELETE,
  PERSON_MOVE_UP,
  PERSON_MOVE_DOWN
} from '../actions/person'

const INITIAL_STATE = {
  persons: []
}

export default function(state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case PERSON_EMPTY: {
      return { ...state, persons: [] }
    }
    case PERSON_GET: {
      return { ...state, persons: [] }
    }
    case PERSON_CREATE: {
      const { id, fullname } = action.payload
      return { 
        ...state, 
        persons: [ ...state.persons, { id, fullname } ]
      }
    }
    case PERSON_UPDATE: {
      const { id, fullname } = action.payload
      const index = _.findIndex(state.persons, person => person.id === id)
      return { 
        ...state, 
        persons: [
          ...state.persons.slice(0, index),
          { id, fullname },
          ...state.persons.slice(index + 1),
        ]
      }
    }
    case PERSON_DELETE: {
      const { id } = action.payload
      console.log('masok')
      return { 
        ...state, 
        persons: _.filter(state.persons, person => person.id !== id)
      }
    }
    case PERSON_MOVE_UP: {
      const { id } = action.payload
      const index = _.findIndex(state.persons, person => person.id === id)
      return { 
        ...state, 
        persons: [
          ...state.persons.slice(0, index - 1),
          state.persons[index],
          state.persons[index - 1],
          ...state.persons.slice(index + 1)
        ]
      }
    }
    case PERSON_MOVE_DOWN: {
      const { id } = action.payload
      const index = _.findIndex(state.persons, person => person.id === id)
      return { 
        ...state, 
        persons: [
          ...state.persons.slice(0, index),
          state.persons[index + 1],
          state.persons[index],
          ...state.persons.slice(index + 2)
        ]
      }
    }
    default: {
      return state
    }
  }
}
