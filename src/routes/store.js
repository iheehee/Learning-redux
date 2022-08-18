import { createStore } from "redux";
import { createAction, createSlice, configureStore } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = createAction(ADD);
const deleteToDo = createAction(DELETE);

/* const reducer = (state = [], action) => {
    switch (action.type) {
      case ADD:
        const newToDoObj = { text: action.text, id: Date.now() };
        return [...state, newToDoObj];
      case DELETE:
        const cleaned = state.filter(toDo => toDo.id !== action.payload);
        return cleaned;
      default:
        return state;
          }
        }; */
/* const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => 
    state.filter(toDo => toDo.id !== action.payload)
}) */

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});


export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducers });;
