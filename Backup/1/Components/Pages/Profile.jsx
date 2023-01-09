import React from 'react'
import Navbar from './Navbar'
import "./Navbar.css";

function Profile(props) {

  function handleClick(){
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  // console.log("Name: " + props.name + "\nEmail: " + props.email + "\nPassword: " + props.password + "\n");

  return (
    <div style={{backgroundColor:"rgb(255, 246, 235)", paddingBottom:"440px"}}>
      <Navbar name={props.name}></Navbar>
      <h1 className='profile-header'>Profile</h1>
      <div className='profile-content'>
        <p>Name :<span>{props.name}</span></p>
        <p>Email :<span>{props.email}</span></p>
        {/* <p style={{marginBottom:"0"}} id="password" >Password :<span>{props.password}</span></p> */}
        Password: <span><input style={{border:"none"}} type="password" value={props.password} id="myInput"></input></span><br />
        <input style={{marginLeft:"70px", height:"15px", width:"15px"}} type="checkbox" onClick={handleClick} /><span>Show Password</span>
      </div>
    </div>
  )
}

export default Profile;