import React, { Component } from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            sidebar: false
        }

    }

    // 콜백함수(화살표 방식으로 해야 바인드 메소드 안 해도 된다)
    showSidebar = () =>{
        this.setState({
            sidebar: true
        })
    }

    // 멤버 함수
    render(){
        return(
            <>
                <div className='menu'>
                    <Link to="#" className="menu-bar">
                        <FaIcons.FaBars onClick={this.showSidebar} />
                    </Link>
                    <h1>Sundaily</h1>
                </div>

            </>
        );
    }
}

export default Header;