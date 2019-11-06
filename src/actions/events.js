import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;

  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = (data) => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${user}`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const loadEvent = id => (dispatch) => {
//   console.log(getState().events);
  // if (getState().events) return

  request(`${baseUrl}/event/${id}`)
    .then(response => {
      dispatch({
        type: "LOAD_EVENT",
        event: response.body
      });
    })
    .catch(console.error);
};

export const updateEvent = (id, data) => dispatch => {
  request.put(`${baseUrl}/event/${id}`)
  .send(data)
  .then(response => {
    dispatch({
      type: "EVENT_UPDATE_SUCCESS",
      event: response.body
    });
  });
};

export const deleteEvent = id => dispatch => {
  request
    .del(`${baseUrl}/event/${id}`)
    .then(response => {
      dispatch({
        type: "EVENT_DELETE_SUCCESS",
        id: id
      });
    })
    .catch(console.error);
};

export const login = (email, password) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/login`)
    .send({email, password})
    .then(response => {
      dispatch({
        type: "GET_TOKEN_SUCCESS",
        token: response.body.jwt
      })
    })
}