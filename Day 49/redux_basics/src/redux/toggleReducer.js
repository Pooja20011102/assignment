import { TOGGLE_THEME } from "./toggle";

const themeInitialState = { theme: "light" };

function themeReducer(state = themeInitialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        theme: state.theme === "light" ? "dark" : "light"
      };

    default:
      return state;
  }
}

export default themeReducer;
