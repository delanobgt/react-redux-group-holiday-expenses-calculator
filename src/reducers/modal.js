import {
  CONFIRM_MODAL_SHOW,
  CONFIRM_MODAL_HIDE,
} from '../actions/modal'

const INITIAL_STATE = {
  confirmModal: {
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
    default: {
      return state
    }
  }
}
