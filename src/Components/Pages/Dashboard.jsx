import React from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar name={localStorage.getItem('Name')}></Navbar>
      <div className='dashboard-content'>
        <marquee behavior="scroll" direction="left" scrollamount="20"><p style={{ fontSize: "50px" }}>Welcome to Book E-Store</p></marquee>
        <button onClick={()=> {navigate("/login/dashboard/buy");}}>Buy a Book</button>
      </div>
    </div>
  )
}

export default Dashboard;
