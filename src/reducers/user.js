//localStorage.setItem("jwt","something")
const token = localStorage.getItem("jwt")
const initialState = token ? token: ""

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOKEN_SUCCESS":
      return action.token;

    default:
      return state;
  }
};

export default user;
