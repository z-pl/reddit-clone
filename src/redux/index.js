import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { connect, useSelector, useDispatch } from "react-redux";

import thunk from "redux-thunk";

import countReducer from "./count";
import loadingReducer from "./loading";
import redditReducer from "./PostsAPI";
import subredditReducer from "./subredditAPI";

import { fetchInitPosts } from "./PostsAPI";
import { fetchTopSubReddits } from "./subredditAPI";
const store = configureStore(
  {
    reducer: {
      count: countReducer,
      loading: loadingReducer,
      posts: redditReducer,
      subreddits: subredditReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  }
)
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchTopSubReddits())
store.dispatch(fetchInitPosts())
export default store;
