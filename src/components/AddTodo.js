import React,{useState} from 'react'
import '../App.css'
export default function AddTodo(props) {

    const [title,setTitle] = useState("");
    const onSubmit = (e)=>{
        e.preventDefault();

        props.addTodo(title);
        setTitle("")

    }

    const onchange =(e)=>{
            setTitle(e.target.value);
    }
    return (
       <form onSubmit={onSubmit} style={{display :'flex'}}>
        <input
        type="text"
        name="title"
        style={{flex :10 ,padding: '15px',fontSize : '15px'}}
        value={title}
        onChange={onchange}
        placeholder="Add Todo......"
        />
        <input type="submit"
        value="Add Todo"
        className="btn"
        style={{flex :1}}
        />
       </form>
    )
}
