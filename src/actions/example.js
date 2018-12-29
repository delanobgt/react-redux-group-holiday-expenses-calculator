// import custom axios client
import exampleAPI from '../api/example'

// type of actions
export const EXAMPLE_EMPTY = 'EXAMPLE_EMPTY'
export const EXAMPLE_GET = 'EXAMPLE_GET'
export const EXAMPLE_CREATE = 'EXAMPLE_CREATE'
export const EXAMPLE_UPDATE = 'EXAMPLE_UPDATE'
export const EXAMPLE_DELETE = 'EXAMPLE_DELETE'

export const getExample = (callback) => async dispatch => {
  try {
    const examples = await exampleAPI.get(`/examples`)
    dispatch({
      type: EXAMPLE_GET,
      payload: examples
    })
    if (callback) callback()
  } catch (error) {
    if (callback) callback(error)
  }
}
