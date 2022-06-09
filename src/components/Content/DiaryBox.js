import React from "react";
import './Pages.css';

import * as AiIcons from "react-icons/ai";

function DefaultPage({item, onDelete}){
    // const imgURL = require(item.img)
    // console.log(imgURL)
    return(
        <div className="DiaryListItem Box">
            <div className="DiaryListItem Img">
                <img src={item.img} alt={item.title} />
                {/* <AiIcons.AiOutlineCloseCircle onClick={Test} /> */}
            </div>
            <div className="DiaryListItem Title">제목: {item.title}</div>
            <div className="DiaryListItem Date">날짜: {item.date}</div>
        </div>
    )
};

function DiaryList({items, onDelete}){
    return(
        <div className="DiaryListItem">
            {items.map((item, index)=>{
                return(
                    // <div key={index} className="DiaryListItem Box">
                    <DefaultPage key={index} item={item} onDelete={onDelete} />
                )
            })}
        </div>
    );
}


export default DiaryList;