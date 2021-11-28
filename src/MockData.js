const todos = [{
    id:0,
    isDone: false,
    text:"sample"
}]

export const addTodo = text => {
    const newTodos = [...todos, { id: todos.length, isDone:false, text }];
    todos.push({ id: todos.length, isDone:false, text })
     return (newTodos);
  };

  export const updateTodo = (text,id) => {
    todos.map((item) =>item.id == id ? item.text = text : item );
     return (todos);
  };

  export const markTodo = index => {
    const newTodos = [...todos];
    console.log("odos[index]",todos[index])
    newTodos[index].isDone = true;
    return (newTodos);
  };

  export const removeTodo = index => {
    const newTodos = [...todos];
    todos.splice(index, 1);
    return (newTodos);
  };
  export const getTodoList = () => {
    return todos;
  };
  export const getTodoId = (id) => {
    const todo = todos.find(todo => todo.id === parseInt(id));
    console.log("todo",todo)
    return todo;
  };