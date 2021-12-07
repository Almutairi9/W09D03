const initialState = {
  todos: [],
};

const TodosFun = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_TODOS":
      const { todos } = payload;
      return { todos };
    case "ADD_TODO":
      const { todo } = payload;
      const addedTodos = [...state.todos, todo];
      return { todos: addedTodos };
    case "UPDATE_TODO":
      const { updatedTodo } = payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo._id === updatedTodo._id) {
          return updatedTodo;
        } else {
          return todo;
        }
      });
      return { todos: updatedTodos };
    case "DELETE_TODO":
      const { deletedTodo } = payload;
      const deletedTodos = state.todos.filter(
        (todo) => todo._id !== deletedTodo._id
      );
      return { todos: deletedTodos };
    default:
      return state;
  }
};

export default TodosFun;

export const getTodosFunction = (data) => {
  return {
    type: "GET_TODOS",
    payload: { todos: data },
  };
};

export const addTodoFunction = (data) => {
  return {
    type: "ADD_TODO",
    payload: { todo: data },
  };
};

export const updateTodoFunction = (data) => {
  return {
    type: "UPDATE_TODO",
    payload: { updatedTodo: data },
  };
};

export const deleteTodoFunction = (data) => {
  return {
    type: "DELETE_TODO",
    payload: { deletedTodo: data },
  };
};