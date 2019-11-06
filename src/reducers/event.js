const reducer = (state = null, action) => {
  switch (action.type) {
    case "LOAD_EVENT":
      return { ...action.event };
    case "EVENT_UPDATE_SUCCESS":
      return { ...action.event };

    default:
      return state;
  }
};

export default reducer;
