import React from 'react'
import {Link } from 'react-router-dom'
export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/"  style={linkStyle}>Home   </Link>|
            <Link to="/about"  style={linkStyle}>    About</Link>
        </header>
    )
}

const headerStyle ={
    
    background : "rgb(31, 31, 31)",
    color : '#fff',
    textAlign :'center',
    padding : '9px'
}

const linkStyle ={

    color: '#fff',
    textDecoration :'none'
}
