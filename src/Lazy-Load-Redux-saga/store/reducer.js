import { setData$ } from "./actions";

export const initialState = {
  counter: 0,
  list: [],
  limit: 30
};
export default function(state = initialState, action) {
  if (action.type === setData$.SUCCESS) {
    return {
      ...state,
      list: [...state.list, ...action.payload.data],
      counter: state.counter + state.limit,
      limit: 10
    };
  }
  // switch (action.type) {
  //   case setData$.SUCCESS:
  // return {
  //   ...state,
  //   list: [...state.list, ...action.payload.data],
  //   counter: state.counter + state.limit,
  //   limit: 10
  // };
  // }

  return state;
}
