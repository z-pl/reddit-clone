import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/count";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";
import PostThread from "./pages/PostThread";
function App(props) {

  const count = useSelector(state=> state.count);
  const dispatch = useDispatch();
  return (
    <div className="App bg-gray-200">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Newsfeed />}></Route>
        <Route path="post/:postId" element={<PostThread />}></Route>
      </Routes>
    </div>
  );
}


export default App
