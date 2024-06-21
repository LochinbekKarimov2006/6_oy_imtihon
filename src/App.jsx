import { createBrowserRouter,Link,Navigate,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainLeaut from './layout/MainLeaut'
import Contact from './pages/Contact'
import About from './pages/About'
import ToliqMalumod from './pages/ToliqMalumod'
import Haritlar from './pages/Haritlar'
import { useContext, useEffect, useState } from 'react'


import "./firebase/confid"
import LogAut from './pages/LogAut'
import ProtectRouter from './components/ProtectRouter'
import { GlobalContext } from './context/GloblContext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/confid'
import LoginBirinchi from './pages/LoginBirinchi'
function App() {
  const {user,dispach,isAutChang}=useContext(GlobalContext);
  console.log(dispach)
  console.log(user)
  const router=createBrowserRouter([
    {
      path:'/',
      element:
      <ProtectRouter user={user}>
      <MainLeaut/>
       </ProtectRouter>,
    children:[
    {
    path:'/',
    element:<Home/>
    },
    {
     path:'/about',
     element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
      
    },
    {
      path:'/toliqmalumod/:id',
      element:<ToliqMalumod/>
    },
    {
     path:'/haridlar',
     element:<Haritlar/>
    }
    ]},
    {
      
      path:'/asosiy',
      element: user? <Navigate to='/'/>:<LoginBirinchi/>
      },
      {
        path: '/signup',
        element: user? <Navigate to='/asosiy'/>: <LogAut />,
      },
      {
        path:'/logaut',
        element: user? <Navigate to='/asosiy'/>:<LogAut/>
      },
       
  ])
  console.log(dispach)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      dispach({type:'LOG_IN',payload:user})
      dispach({type:'AUSE_CHANGE'})
    })
  },[])
 
  return (
    <>{isAutChang&& <RouterProvider router={router}/>}
    </>
  )
}

export default App
