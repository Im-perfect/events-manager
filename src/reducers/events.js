const reducer = (state = null, action) => {
  switch (action.type) {
    case "EVENTS_FETCHED":
      return [...action.events];
    case "EVENT_CREATE_SUCCESS":
      return [...state, { ...action.event }];
    case "EVENT_DELETE_SUCCESS":
      return state.filter(event => action.id !== event.id);
    case "EVENT_UPDATE_SUCCESS":
      return state.map(event =>
        event.id === action.event.id ? {...action.event} : {...event}
      );
    default:
      return state;
  }
};

export default reducer;
