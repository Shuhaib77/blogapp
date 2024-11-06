import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import axios from 'axios'

export const contexts=createContext()

function App() {
  const [count, setCount] = useState(0)
  // const [deleted, setDeleted] = useState([]);


  // const deletepost = async (pid) => {
  //   const res = await axios.delete(
  //     `http://localhost:5400/api/posted/delete/${pid}/${id}`
  //   );
  //   setDeleted(res.data.deleteditems);
  //   postbyuser();
  // };
  // useEffect(() => {
  //   deletepost();
  // }, []);
  // console.log(deleted);

  return (
    <>
  

  <contexts.Provider value={{}}>
  <Routes>
    <Route path='/:url' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      
     
    </Routes>

  </contexts.Provider>
    
    

     
    </>
  )
}

export default App
