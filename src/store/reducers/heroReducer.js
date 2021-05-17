import { FETCH_HEROES, CHANGE_NAME } from "../actions/types";
import update from 'react-addons-update';

const initialState = {
  heroes: [],
  items: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HEROES:
      console.log("reducer")
      return{
        ...state,
        items: action.payload
      }
    case CHANGE_NAME:
      return update(state, {name: { $set: action.payload.name}})               
    default:
      return state;
  }
}
