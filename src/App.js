import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import UpdateTodo from "./Components/UpdateTodo";
import Header from "./Header";


const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<UpdateTodo />} />
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App; 
