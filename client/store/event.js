import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_EVENT = 'GET_EVENT';
const ADD_EVENT = 'ADD_EVENT';

/**
 * INITIAL STATE
 */
const defaultEvent = []

/**
 * ACTION CREATORS
 */
const getEvent = events => ({type: GET_EVENT, events})
const addEvent = event => ({type: ADD_EVENT, event})

/**
 * THUNK CREATORS
 */
export const addMe = () =>
  dispatch =>
    axios.get('/api/event')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultEvent, action) {
  switch (action.type) {
    case GET_EVENT:
      return action.events
    case ADD_EVENT:
      return [...state, action.event]
    default:
      return state
  }
}