import _ from 'lodash'
import { 
  PERSON_EMPTY,
  PERSON_GET,
  PERSON_CREATE,
  PERSON_UPDATE,
  PERSON_DELETE,
  PERSON_MOVE_UP,
  PERSON_MOVE_DOWN,
  EXPENSE_EMPTY,
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE
} from '../actions/person'

// state modelling example
// const INITIAL_STATE = {
//   persons: [
//     {
//       id: 'xxxx-xxxx-xxxx-xxxx',
//       fullname: 'Example',
//       expenses: [
//         {
//           id: 'yyyy-yyyy-yyyy-yyyy',
//           info: 'Info',
//           value: 0
//         }
//       ]
//     }
//   ]
// }

const INITIAL_STATE = {
  persons: []
}

export default function(state = INITIAL_STATE, action) {
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
        persons: [ ...state.persons, { id, fullname, expenses: [] } ]
      }
    }
    case PERSON_UPDATE: {
      const { id, fullname } = action.payload
      const index = _.findIndex(state.persons, person => person.id === id)
      return { 
        ...state, 
        persons: [
          ...state.persons.slice(0, index),
          { ...state.persons[index], fullname },
          ...state.persons.slice(index + 1),
        ]
      }
    }
    case PERSON_DELETE: {
      const { id } = action.payload
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
    case EXPENSE_EMPTY: {
      const { personId } = action.payload
      const index = _.findIndex(state.persons, person => person.id === personId)
      return { 
        ...state, 
        persons: [
          ...state.persons.slice(0, index),
          { ...state.persons[index], expenses: [] },
          ...state.persons.slice(index + 1)
        ]
      }
    }
    case EXPENSE_CREATE: {
      const { personId, id, info, value } = action.payload
      const index = _.findIndex(state.persons, person => person.id === personId)
      return { 
        ...state, 
        persons: [
          ...state.persons.slice(0, index),
          {
            ...state.persons[index],
            expenses: [ ...state.persons[index].expenses, { id, info, value } ]
          },
          ...state.persons.slice(index + 1)
        ]
      }
    }
    case EXPENSE_UPDATE: {
      const { personId, id, info, value } = action.payload
      const personIndex = _.findIndex(state.persons, person => person.id === personId)
      const expenseIndex = _.findIndex(state.persons[personIndex].expenses, expense => expense.id === id)
      return { 
        ...state, 
        persons: [
          ...state.persons.slice(0, personIndex),
          {
            ...state.persons[personIndex],
            expenses: [ 
              ...state.persons[personIndex].expenses.slice(0, expenseIndex),
              { id, info, value },
              ...state.persons[personIndex].expenses.slice(expenseIndex + 1)
            ]
          },
          ...state.persons.slice(personIndex + 1)
        ]
      }
    }
    case EXPENSE_DELETE: {
      const { personId, id } = action.payload
      const index = _.findIndex(state.persons, person => person.id === personId)
      return { 
        ...state,
        persons: [
          ...state.persons.slice(0, index),
          {
            ...state.persons[index],
            expenses: state.persons[index].expenses.filter(expense => expense.id !== id)
          },
          ...state.persons.slice(index + 1)
        ]
      }
    }
    default: {
      return state
    }
  }
}
