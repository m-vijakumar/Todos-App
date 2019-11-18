import React,{useState,useEffect} from 'react';
import Todo from './components/Todo'
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { About } from './components/pages/About';
import Footer from './components/layout/Footer'
function App() {
  const [todos ,setTodos] = useState([]);

  useEffect(()=>{
    const storedTodos =JSON.parse(localStorage.getItem("todoitem"))
    if(storedTodos) setTodos(storedTodos)

  },[])

  useEffect(()=>{

    localStorage.setItem("todoitem",JSON.stringify(todos))
  },[todos])
  //console.log(todos)
  const markComplete = (id) =>{
    // console.log(id)
    setTodos( todos.map(todo =>{

      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) 
    )

  }

//Add todo

    const addTodo = (title) =>{
      if(title === '') return

      setTodos(prevTodos =>{
        return [...prevTodos,{id :uuid.v4() ,title : title ,completed :false }]
      })
    }
  //delete Todo 

    const  deleteTodo = (id)=>{
      // console.log(id)

      setTodos(prevTodos => {
        return[...prevTodos.filter(todo =>todo.id !== id ) ] 
      } );

    }
  return (
    <Router>
    <div className="container">
    <Header />
    <Route exact path="/" render={props =>(
      <React.Fragment>
      <AddTodo addTodo={addTodo}/>
      <Todo todos={todos} markComplete = {markComplete} deleteTodo={deleteTodo} />  
      <Footer />
      </React.Fragment>
    )} />

    <Route path="/about" component={About} />
    </div>
    </Router>
  );
}

export default App;
