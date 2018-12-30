// type of actions
export const CONFIRM_MODAL_SHOW = 'CONFIRM_MODAL_SHOW'
export const CONFIRM_MODAL_HIDE = 'CONFIRM_MODAL_HIDE'

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
