import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import UpdateTodo from "./Components/UpdateTodo";
import Header from "./Components/Header";


const App = () => {
  return (
    <BrowserRouter>
    <div
        className="app">
    <Header/>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/edit/:id" element={<UpdateTodo />} />
       
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App; 
