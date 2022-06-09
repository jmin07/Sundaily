import React from "react";

import NavBar from '../NavBar/Navbar'

import './Home.css'

import { Outlet } from "react-router-dom";

function Home(){
    return(
        <div className="Home">  
            <NavBar />
            <div className="MainContent"><Outlet /></div>
        </div>
    );
}

export default Home;