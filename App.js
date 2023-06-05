
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddToDo } from './MyComponents/AddToDo';

import React, { useEffect, useState } from 'react';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === "null") {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (todo) => {
    console.log("im on delete", todo);

    // Deleting will not work this way in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);


    // delete button
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))

  }

  const addToDo = (title, description) => {
    console.log("I am doing", title, description)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myToDo = {
      sno: sno,
      title: title,
      description: description,
    }
    setTodos([...todos, myToDo]);

    localStorage.setItem('todos', JSON.stringify(todos))

    console.log(myToDo);
  }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header title="My To-Do-List" searchBar={false} />
      <AddToDo addToDo={addToDo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
