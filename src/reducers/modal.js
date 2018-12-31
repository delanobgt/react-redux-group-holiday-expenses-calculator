import {
  CONFIRM_MODAL_SHOW,
  CONFIRM_MODAL_HIDE,
  INPUT_MODAL_SHOW,
  INPUT_MODAL_HIDE
} from '../actions/modal'

const INITIAL_STATE = {
  confirmModal: {
    message: null,
    yesCallback: null,
    noCallback: null
  },
  inputModal: {
    message: null,
    yesCallback: null,
    noCallback: null
  }
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONFIRM_MODAL_SHOW: {
      const { message, yesCallback, noCallback } = action.payload
      return { 
        ...state, 
        confirmModal: { message, yesCallback, noCallback }
      }
    }
    case CONFIRM_MODAL_HIDE: {
      return { ...state, confirmModal: INITIAL_STATE.confirmModal }
    }
    case INPUT_MODAL_SHOW: {
      const { message, yesCallback, noCallback } = action.payload
      return { 
        ...state, 
        inputModal: { message, yesCallback, noCallback }
      }
    }
    case INPUT_MODAL_HIDE: {
      return { ...state, inputModal: INITIAL_STATE.inputModal }
    }
    default: {
      return state
    }
  }
}
