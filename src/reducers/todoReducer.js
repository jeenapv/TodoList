import React from "react";


const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === parseInt(action.id)
          ? { ...todo, complete: !todo.complete }
          : todo
      );

    case "REMOVE_TODO":
      console.log(1111, action.id, state)
      return state.filter((todo) => todo.id !== parseInt(action.id));

    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === parseInt(action.id) ? { ...todo, text: action.text } : todo
      );

    case "GET_TODO":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};
export default TodoReducer;
