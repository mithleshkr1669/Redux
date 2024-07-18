// import logo from "./logo.svg";
import "./App.css";
// import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slice/counters";
function App() {
  const count = useSelector((state) => state.counter.counter);
  // console.log(count);
  const dispatch = useDispatch();
  function handleClick(e) {
    const name = e.target.name;
    // console.log(typeof name);
    if (name === "increment") {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  }
  return (
    <div className="App">
      <h1>Let's learn react performance optimization</h1>
      <h3>{count}</h3>
      <button name="increment" onClick={handleClick}>
        increment
      </button>
      <button name="decrement" onClick={handleClick}>
        decrement
      </button>
    </div>
  );
}

export default App;
