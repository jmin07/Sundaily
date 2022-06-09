import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import MenuData from '../DB/MenuData';
import './Navbar.css';

function Navbar(){
    
    // const LiStyle = {
    //     marginBottom:"20px"
    // }

    const [elements, setElement] = useState(MenuData);
    const createNewDiv = () => {
        // const newElement = React.createElement('li', {id:"folder01", style:LiStyle}, '폴더 테스트')
        const id = elements.length;
        let newElement = { title: '기본 디렉토리', path:`/billy/galley/${id+1}`}

        setElement([...elements, newElement])
    };


    return(
        <>
            <div className="sidebar">

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
                                {
                                    elements.map((item, index)=>{
                                        return(
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </li>)
                                    })
                                }
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