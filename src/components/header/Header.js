import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
    return (
        <div className="header"> 
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <Link to="/add-edit"><button>Add a Book</button></Link>
        </div>
    )
}