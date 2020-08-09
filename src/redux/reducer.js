import { STORE_DATA, UPDATE_DATA, DELETE_DATA } from "./actionTypes";
import { uuid, jsonSchema } from "uuidv4";

const initialState = {
  data: [],
};

let newData;
export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      action.data = { ...action.data, id: uuid() };
      console.log("in reducer", action.data);
      newData = state.data.concat(action.data);

      return {
        ...initialState,
        data: newData,
      };

    case UPDATE_DATA:
      newData = state.data.filter((student) => student.id !== action.data.id);
      newData = newData.concat(action.data);
      return {
        ...state,
        data: newData,
      };

    case DELETE_DATA:
      newData = state.data.filter((student) => student.id !== action.data);
      return {
        ...state,
        data: newData,
      };

    default:
      return state;
  }
};
