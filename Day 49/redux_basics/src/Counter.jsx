import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/count";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Counter</h2>
      <h1 style={{color:"blue"}}>Count : {count}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
