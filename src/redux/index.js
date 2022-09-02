import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import countReducer from "./count";
import loadingReducer from "./loading";
import redditReducer from "./PostsAPI";
import subredditReducer from "./subredditAPI";
import postThreadReducer from "./Thread";

import { fetchInitPosts } from "./PostsAPI";
import { fetchTopSubReddits } from "./subredditAPI";
import { fetchPostThread } from "./Thread"
const store = configureStore(
  {
    reducer: {
      count: countReducer,
      loading: loadingReducer,
      posts: redditReducer,
      subreddits: subredditReducer,
      thread: postThreadReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  }
)
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchTopSubReddits())
store.dispatch(fetchInitPosts())
store.dispatch(fetchPostThread("x3pp6a"));
export default store;
