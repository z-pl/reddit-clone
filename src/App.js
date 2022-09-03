import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";
import PostThread from "./pages/PostThread";
function App(props) {

  return (
    <div className="App bg-gray-200">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Newsfeed />}></Route>
        <Route path="post/:postId" element={<PostThread />}></Route>
        <Route exact path="query/:queryString" element={<Newsfeed />}></Route>
      </Routes>
    </div>
  );
}


export default App
