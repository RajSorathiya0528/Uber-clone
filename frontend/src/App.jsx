import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignUp from './pages/UserSignUp.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSigiUp from './pages/CaptainSigiUp'
import CaptainHome from './pages/CaptainHome.jsx'
import UserProtectedWraper from './pages/UserProtectedWraper.jsx'
import Start from './pages/Start.jsx'
import UserLogout from './pages/UserLogout.jsx'
import Riding from './pages/Riding.jsx'
import CaptainRiding from './pages/CaptainRiding.jsx'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Start/> }/> 
        <Route path='/userLogin' element={ <UserLogin/> }/>
        <Route path='/riding' element={ <Riding /> } />
        <Route path='/captainRiding' element={ <CaptainRiding />} />
        <Route path='/userSignUp' element={ <UserSignUp/> }/>
        <Route path='/captainLogin' element={ <CaptainLogin/> }/>
        <Route path='/captainSigiUp' element={ <CaptainSigiUp/> }/>
        <Route path='/home' element={ 
          <UserProtectedWraper>
            <Home/>
          </UserProtectedWraper>
         } />
         <Route path='/user/logout' element={
          <UserProtectedWraper>
            <UserLogout/>
          </UserProtectedWraper>
         } />
         <Route path='/captainHome' element={
            <CaptainHome/>
          } />
      </Routes>
    </div>
  )
}

export default App
