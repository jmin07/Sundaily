import React, {useState, useRef} from 'react';
// import ReactDOM from "react-dom";
// import styled from 'styled-components';
import './sidebar-a.css'

/*
    * 개선사항
    * 1. 한 개 밖에 생성이 안되네? -- <완료>
        -> useState 사용

    * 2. button 을 누르면 list 들을 sort 하는 번호가 생성 되어야 한다. -- <완료>
        => <ol><li></ol>

    * 3. 버튼 이미지 적용이 안됨

    * list 개수를 최대 몇 개까지 허용하는지? (마우스 휠로 쉽게 볼 수 있으면 좋을 것 같다.)
        =>

    * 로그아웃 하단에 fixed 적용

*/

function SideA () {
    
    // 버튼 누를 때 만들어지는 li style 적용 (인라인스타일, 비추천? 수정 필요)
    const LiStyle = {
        marginBottom:"20px"
    }

    // 버튼을 누를 때마다 생성 되도록 하는 기능
    const [elements, setElement] = useState([]);

    const createNewDiv = () => {
        
        // li 새롭게 만들기
        const newElement = React.createElement('li', {id:"folder01", style:LiStyle}, '폴더 테스트')
        
        // 누를 때마다 추가
        setElement([...elements, newElement])
    };


    return (
        <div className="sidebar-a grid-item">
            <div className='gird-container'>

                <div className='sideA-header grid-item'>
                    <h2>Sundaily</h2>
                    <button onClick={createNewDiv} src="./assets/button/category_button.svg">button</button>
                </div>
                
                <div id="sideA-main grid-item">
                    <ol>
                        {elements}
                    </ol>
                </div>
                
                <div>
                    <button className='sideA-main footer'>로그아웃</button>
                </div>
            </div>
        </div>
    );
}

export default SideA;
