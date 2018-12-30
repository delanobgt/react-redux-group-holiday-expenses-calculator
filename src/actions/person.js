import { guid } from '../helper'

// type of actions
export const PERSON_EMPTY = 'PERSON_EMPTY'
export const PERSON_GET = 'PERSON_GET'
export const PERSON_CREATE = 'PERSON_CREATE'
export const PERSON_UPDATE = 'PERSON_UPDATE'
export const PERSON_DELETE = 'PERSON_DELETE'
export const PERSON_MOVE_UP = 'PERSON_MOVE_UP'
export const PERSON_MOVE_DOWN = 'PERSON_MOVE_DOWN'

export const EXPENSE_EMPTY = 'EXPENSE_EMPTY'
export const EXPENSE_CREATE = 'EXPENSE_CREATE'
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE'
export const EXPENSE_DELETE = 'EXPENSE_DELETE'

export const emptyPerson = () => {
  return {
    type: PERSON_EMPTY
  }
}

export const getPerson = () => {
  return {
    type: PERSON_GET
  }
}

export const createPerson = ({ fullname }) => {
  return {
    type: PERSON_CREATE,
    payload: { id: guid(), fullname }
  }
}

export const updatePerson = (id, { fullname }) => {
  return {
    type: PERSON_UPDATE,
    payload: { id, fullname }
  }
}

export const deletePerson = (id) => {
  return {
    type: PERSON_DELETE,
    payload: { id }
  }
}

export const moveUpPerson = (id) => {
  return {
    type: PERSON_MOVE_UP,
    payload: { id }
  }
}

export const moveDownPerson = (id) => {
  return {
    type: PERSON_MOVE_DOWN,
    payload: { id }
  }
}

export const emptyExpense = (personId) => {
  return {
    type: EXPENSE_EMPTY,
    payload: { personId }
  }
}

export const createExpense = (personId, { info, value }) => {
  return {
    type: EXPENSE_CREATE,
    payload: { personId, id: guid(), info, value }
  }
}

export const updateExpense = (personId, id, { info, value }) => {
  return {
    type: EXPENSE_UPDATE,
    payload: { personId, id, info, value }
  }
}

export const deleteExpense = (personId, id) => {
  return {
    type: EXPENSE_DELETE,
    payload: { personId, id }
  }
}
