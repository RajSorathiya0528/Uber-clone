import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignUp from './pages/UserSignUp.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSigiUp from './pages/CaptainSigiUp'
import UserProtectedWraper from './pages/UserProtectedWraper.jsx'
import Start from './pages/Start.jsx'
import UserLogout from './pages/UserLogout.jsx'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <Start/> }/> 
        <Route path='/userLogin' element={ <UserLogin/> }/>
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
      </Routes>
    </div>
  )
}

export default App
