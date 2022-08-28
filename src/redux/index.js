import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { connect, useSelector, useDispatch } from "react-redux";

import thunk from "redux-thunk";

import countReducer from "./count";
import loadingReducer from "./loading";
import redditReducer from "./redditAPI";


import { fetchInitPosts } from "./redditAPI";

const store = configureStore(
  {
    reducer: {
      count: countReducer,
      loading: loadingReducer,
      reddit: redditReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  }
)
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchInitPosts())
export default store;
