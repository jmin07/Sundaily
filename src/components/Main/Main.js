import React from "react";

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
            </div>
        </>
    )
}

export default Main;