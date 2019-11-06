import { combineReducers } from 'redux'
import events from './events'
import event from './event'
import user from './user'

export default combineReducers({
  // your reducers will go here
  events,
  event,
  user
})