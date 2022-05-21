import React, { useState } from "react";
import Modal from '../Modal/modal';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";

import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar(){
    
    const LiStyle = {
        marginBottom:"20px"
    }

    // const [show, setShow] = useState(false);
    const [elements, setElement] = useState([]);
    const createNewDiv = () => {
        const newElement = React.createElement('li', {id:"folder01", style:LiStyle}, '폴더 테스트')
        
        setElement([...elements, newElement])
    };
    // const modalmodal = () => {
    //     console.log();
    //     setShow(!show);
    // }

    return(
        <>
            <div className="sidebar">
{/* 
                <div className={show? "modal on" : "modal off"}>
                    <Modal />
                </div> */}

                <div className="sidebar-header">
                    <Link to="#" className='header-Button'>
                        <FaIcons.FaBars />
                    </Link>

                    <h2 className="header-Text">Sundaily</h2> 
                </div>

                <div className='sidebar-main'>
                  
                    <div className="main-menu">
                        
                        <div className="main-header">
                            <div className="menu-title">
                                <h2>목록</h2>
                            </div>
                            <div className="menu-Button">
                                <AiIcons.AiOutlinePlusCircle onClick={createNewDiv}/>
                            </div>
                        </div>

                        <div className="main-main">
                            <ol>
                                {elements}
                            </ol>
                        </div>

                    </div>
                </div>

                <div className="sidebar-footer">
                    <div className='logout-Button'>
                        <button className="logout">로그아웃</button>
                    </div>
                </div>
            
            </div>
        </>
    );
}

export default Navbar;