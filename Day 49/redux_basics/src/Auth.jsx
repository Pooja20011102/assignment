import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/login";

function Auth() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Authentication</h2>
      <h1>{isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}</h1>

      {isLoggedIn ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
}

export default Auth;

