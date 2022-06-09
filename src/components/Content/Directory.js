import React from 'react';
import { useParams } from "react-router-dom";

import DiaryList from './DiaryBox';
import Diary from '../DB/Diary';
import './Pages.css';


function Report(){
    const params = useParams();
    console.log("테스트 :", params);

    if(params.pages === '1'){
        return (
            <DiaryList items={Diary}/>
        )
    } else if (params.pages === '2'){
        return(
            <h1>report</h1>
        )
    } else if (params.pages === "3"){
        return(
            <h1>Products</h1>
        )
    }
}

export default Report;