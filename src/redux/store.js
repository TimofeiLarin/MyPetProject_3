import { createStore } from "redux";

const initialState = {
  likes: 10
}

const reducer = (state = initialState, action) => {
  console.log("red", action)

  return state;
}

const store = createStore(reducer);

export default store;