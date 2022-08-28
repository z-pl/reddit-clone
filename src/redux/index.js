import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export function increment() {
  return {
    type: "INCREMENT"
  }
}

export function FETCH_INIT_STATE() {
  return (dispatch, getState) => {
    console.log("ping")
    const number = getState();
    const baseUrl = `https://www.reddit.com/r/popular.json`;
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({type: "FETCH_INIT_STATE", data})
      })

  }
}


function reducer(count = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return count + 1
    default:
      return count
  }
}

const store = configureStore(
  {
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
  }
)
store.subscribe(() => console.log(store.getState()))
store.dispatch(FETCH_INIT_STATE())
export default store;
