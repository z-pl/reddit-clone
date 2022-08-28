import React from "react";
import Navbar from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/count";


function App(props) {

  const count = useSelector(state=> state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Navbar />
      <Newsfeed />
      <button onClick={() => dispatch(increment())}>add</button>
    </div>
  );
}


export default App
