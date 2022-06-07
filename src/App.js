import logo from './logo.svg';
import './App.css';
import { Routes,Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Board from './Components/Board';

import BoardPage from './Components/BoardPage';
import styled from "styled-components";

const NavLink = styled(Link)`
text-decoration:none;
color:black;
font-weight:bold; 
text-decoration-line: none; 
  :active{
    color: green;
  }
`
function App() {

  return (
    <div className="App">
      <NavLink className='NavLinks' to="/" >Home</NavLink>|
      <NavLink className={NavLink} to="about">About</NavLink>|
      <NavLink className={NavLink} to="board">Board</NavLink>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/board" element={<Board/>}>
          <Route path="/board/:id" element ={<BoardPage/>}/>
        </Route>
        </Routes> 
    </div>
  );
}

export default App;
