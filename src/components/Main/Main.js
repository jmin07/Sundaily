import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";

import { Link } from "react-router-dom";

import './Main.css';

function Main() {

    return(
        <>
            <div className="main">
                
                <header className='main header'>
                    <Link to="#" className='header Button'>
                        <GrIcons.GrSearch />
                    </Link>
                </header>

                <div className="main main">
                    <h2 className="Text">Sundaily</h2> 
                </div>

                <div className="main footer">
      
                </div>
            </div>
        </>
    )
}

export default Main;