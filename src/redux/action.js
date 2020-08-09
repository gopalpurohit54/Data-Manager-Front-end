import { STORE_DATA, UPDATE_DATA, DELETE_DATA } from "./actionTypes";

export const storeData = (data) => {
  return {
    type: STORE_DATA,
    data: data,
  };
};
export const updateData = (data) => {
  return {
    type: UPDATE_DATA,
    data: data,
  };
};

export const deleteData = (data) => {
  return {
    type: DELETE_DATA,
    data: data,
  };
};
