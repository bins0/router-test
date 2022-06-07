import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }
  return (
    <div>
        <h1>Home</h1>
        <p>리액트 홈에 오신것을 환영합니다</p>
        <p>위의 NavLink를 통해서 이동하여 내용을 확인 할수있습니다</p>
        <p>NavLink를 사용하여 현재위치를 알수있습니다</p>
        <p>NavLink는 a 태그 CSS를 이용하여 꾸며줄수있습니다</p>
         <button onClick={back}>뒤로가기</button>
    </div>
  )
}

export default Home