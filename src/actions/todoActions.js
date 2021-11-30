let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    id
});

export const updateTodo = (id, text) => ({
    type: "UPDATE_TODO",
    id,
    complete: false,
    text
});

export const getTodoId = (id) => ({
    type: "GET_TODO",
    id
});
