import React from "react";
import Navbar from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment } from "./redux";


function App(props) {

  const count = useSelector(state=> state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>{count}</div>
      <Navbar />
      <Newsfeed />
      <button onClick={() => dispatch(increment())}>add</button>
    </div>
  );
}


export default App
