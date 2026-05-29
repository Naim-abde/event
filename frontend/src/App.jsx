import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Login from './page/auth/Login'
import Register from './page/auth/Register'
import ProtectedRoute from './router/Protected'
import Profile from './page/user/Profile'
import Event from './page/user/Event'

function App() {

  return (
    <>
     <Routes>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>} />
          
          <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path='/event' element={<ProtectedRoute><Event/></ProtectedRoute>} />
       
     </Routes>
    </>
  )
}

export default App
