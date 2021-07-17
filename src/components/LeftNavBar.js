import React from 'react';
import './LeftNavBar.css';
import cslogo from '../icons/cslogo.jpg';
import { NavLink } from 'react-router-dom';
function LeftNavBar() {
  return (
     <div className="leftnavbar">
        <img className="cslogo" src={cslogo} alt="CS-Logo"/>
		<br/>
		<NavLink className="nav-link text-style" exact to='/' activeStyle={{fontWeight: "bold",color:"#809fff", textDecoration: "none"}}>
			Introduction
		</NavLink>
		<br/>
		<br/>
		<NavLink className="nav-link text-style" exact to='/subjects' activeStyle={{fontWeight: "bold",color:"#809fff", textDecoration: "none"}}>
			Technical Subjects
		</NavLink>
		<br/>
		<br/>
		<NavLink className="nav-link text-style" exact to='/questions' activeStyle={{fontWeight: "bold",color:"#809fff", textDecoration: "none"}}>
			Practice Questions
		</NavLink>
		<br/>
		<br/>
		<NavLink className="nav-link text-style" exact to='/books' activeStyle={{fontWeight: "bold",color:"#809fff", textDecoration: "none"}}>
			Books
		</NavLink>
		<br/>
		<br/>
     </div>
  );
}
export default LeftNavBar;
