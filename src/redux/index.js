import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import countReducer from "./count";
import loadingReducer from "./loading";
import redditReducer from "./PostsAPI";
import subredditReducer from "./subredditAPI";
import postThreadReducer from "./Thread";

import { fetchPosts } from "./PostsAPI";
import { fetchTopSubReddits } from "./subredditAPI";
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
store.dispatch(fetchPosts())
export default store;
