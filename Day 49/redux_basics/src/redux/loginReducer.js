import { login , logout } from "./login";
const authInitialState = { isLoggedIn: false };

function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { isLoggedIn: true };

    case "LOGOUT":
      return { isLoggedIn: false };

    default:
      return state;
  }
}

export default authReducer;