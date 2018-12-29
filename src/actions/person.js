import { guid } from '../helper'

// type of actions
export const PERSON_EMPTY = 'PERSON_EMPTY'
export const PERSON_GET = 'PERSON_GET'
export const PERSON_CREATE = 'PERSON_CREATE'
export const PERSON_UPDATE = 'PERSON_UPDATE'
export const PERSON_DELETE = 'PERSON_DELETE'
export const PERSON_MOVE_UP = 'PERSON_MOVE_UP'
export const PERSON_MOVE_DOWN = 'PERSON_MOVE_DOWN'

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
  console.log('del')
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
