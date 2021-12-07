import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Nav from "./../Nav";
import {
  getTodosFunction,
  addTodoFunction,
  updateTodoFunction,
  deleteTodoFunction,
} from "./../../reducers/todos";

const Todos = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  // const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  // const [update, setUpdate] = useState("");
  const [token, setToken] = useState("");

  const state = useSelector((state) => {
    return {
      users: state.users,
      TodosFun: state.TodosFun,
    };
  });

  useEffect(() => {
    getAllTasks(state.users.token);
    // User();
    // getAllTasks(state.token);
  }, []);

  const User = () => {
    const newToken = localStorage.getItem("token");
    setToken(newToken);
    getAllTasks(newToken);
  };

  //get all tasks
  const getAllTasks = async (token) => {
    try {
      console.log(token);
      const result = await axios.get(`${BASE_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${state.users.token}`,
        },
      });
      console.log(result);
      dispatch(getTodosFunction(result.data));
      // setTasks(result.data);
    } catch (error) {
      dispatch(getTodosFunction([]));
      console.log(error);
    }
  };

  // add new task
  const addNewTask = async () => {
    try {
      console.log(task);
      const result = await axios.post(
        `${BASE_URL}/todos`,
        {
          task,
        },
        {
          headers: {
            Authorization: `Bearer ${state.users.token}`,
          },
        }
      );
      dispatch(addTodoFunction(result.data));
    } catch (error) {
      console.log(error);
    }
    // getAllTasks(token);
  };

  // update task
  const updateTask = async (id) => {
    const task = prompt("update your task ... ");
    try {
      console.log(task);
      const result = await axios.put(
        `${BASE_URL}/todos/${id}`,
        {
          task,
        },
        {
          headers: {
            Authorization: `Bearer ${state.users.token}`,
          },
        }
      );
      dispatch(updateTodoFunction(result.data));
      // getAllTasks(token);
    } catch (error) {
      console.log(error);
    }
  };

  // delete task by id
  const deleteTask = async (id) => {
    try {
      console.log(token);
      const result = await axios.delete(`${BASE_URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${state.users.token}`,
        },
      });
      dispatch(deleteTodoFunction(result.data));
      // getAllTasks(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <br />
      <div>
        <input
          onChange={(e) => setTask(e.target.value)}
          placeholder="add Tasks"
        />{" "}
        <br />
        <br />
        <button className="btn" onClick={addNewTask}>
          Add New Task
        </button>
      </div>
      <div>
        {state.TodosFun.todos.length &&
          state.TodosFun.todos.map((item) => (
            <div key={item._id}>
              <h2>{item.task}</h2>
              <button onClick={() => updateTask(item._id)}>Update</button>
              <button onClick={() => deleteTask(item._id)}>Delete</button>
            </div>
          ))}
      </div>
      <br />
    </>
  );
};

export default Todos;
