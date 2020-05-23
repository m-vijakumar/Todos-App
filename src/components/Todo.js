import React from 'react';
import Todoitem from './Todoitem';

function Todo(props) {

   const todolist = props.todos.map((todo)=>

    // <h3 key={todo.id}>{todo.title}</h3>
        <Todoitem key={todo.id} todo={todo} markComplete = {props.markComplete} deleteTodo={props.deleteTodo}/>
  );
    return (
      <div >
       
        {todolist}

      </div>
    );
  }

  export default Todo;