import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/toggle";

function ThemeToggle() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        background: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh"
      }}
    >
      <h2>Redux Theme Toggle</h2>
      <h1>Current Theme: {theme}</h1>

      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
