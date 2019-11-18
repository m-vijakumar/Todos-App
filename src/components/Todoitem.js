import React from 'react'
import '../App.css'
function Todoitem(props) {
   
   const getStyle =()=>{
        return{
            backgroundColor : '#50D689  ',
            padding : '10px ',
            textDecoration : props.todo.completed ?
            'line-through' : 'none'
     }}

  const handleTodoClick = () =>{

    props.markComplete(props.todo.id)
  }

  const deltodo =() =>{
      props.deleteTodo(props.todo.id)
  }
    return (

        <div style={getStyle()}>
           
            <h3>  <input type="checkbox" className="checkbox" checked={props.todo.completed} onChange={handleTodoClick} />
             {"  "}{props.todo.title}
             <button onClick={deltodo} style={btnStyle}>x</button>
             </h3>
        </div>
    );
}

const btnStyle = {
    backgroundColor : '#1C1D1C ',
    color: "#fff",
    border:'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor :'pointer',
    float:'right'
}


export default Todoitem
