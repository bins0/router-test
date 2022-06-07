import React from 'react'
import { Link, Routes, Route, Outlet} from "react-router-dom";
import { useNavigate ,useParams} from 'react-router-dom';
import styled from "styled-components";

const NavLink =styled(Link)`
    text-decoration:none;
    color:black;
    font-weight:bold; 
    text-decoration-line: none; 
`
const Board = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
  return (
    <div>
        <h1>Board</h1>
        <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>
        <NavLink to="/board/:id">12345</NavLink> <br />
        <Outlet/>
        <button onClick={back}>뒤로가기</button>
    </div>
  )
}

export default Board