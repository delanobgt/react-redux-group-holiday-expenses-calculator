// type of actions
export const CONFIRM_MODAL_SHOW = 'CONFIRM_MODAL_SHOW'
export const CONFIRM_MODAL_HIDE = 'CONFIRM_MODAL_HIDE'

export const INPUT_MODAL_SHOW = 'INPUT_MODAL_SHOW'
export const INPUT_MODAL_HIDE = 'INPUT_MODAL_HIDE'

export const showConfirmModal = ({ message, yesCallback, noCallback }) => {
  return {
    type: CONFIRM_MODAL_SHOW,
    payload: { message, yesCallback, noCallback }
  }
}

export const hideConfirmModal = () => {
  return {
    type: CONFIRM_MODAL_HIDE
  }
}

export const showInputModal = ({ message, yesCallback, noCallback }) => {
  return {
    type: INPUT_MODAL_SHOW,
    payload: { message, yesCallback, noCallback }
  }
}

export const hideInputModal = () => {
  return {
    type: INPUT_MODAL_HIDE
  }
}
