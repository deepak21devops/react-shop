import { ADD_ITEMS, DEL_ITEMS } from "./ActionTypes";

export const addItem = (users) => {
  return {
    type: ADD_ITEMS,
    payload: users,
  };
};

export const delItem = () => {
  return {
    type: DEL_ITEMS,
  };
};
