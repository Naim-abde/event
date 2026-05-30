import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Login from './page/auth/Login'
import Register from './page/auth/Register'
import ProtectedRoute from './router/Protected'
import Profile from './page/user/Profile'
import Event from './page/user/Event'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './page/public/Home'
import Events from './page/public/Events'
import DashboardAdmin from './page/admin/DashboardAdmin'
import UsersAdmin from './page/admin/UsersAdmin'
import OrganizersAdmin from './page/admin/OrganizersAdmin'
import EventsAdmin from './page/admin/EventsAdmin'
import Dashboard from './page/organizer/Dashboard'
import MyEvents from './page/organizer/MyEvents'
import Organizer from './page/organizer/Organiser'
import CreateEvent from './page/organizer/CreateEvent'
import CategoryAdmin from './page/admin/CategoryAdmin'
import CategoriesAdmin from './page/admin/CategoriesAdmin'

function App() {

  return (
    <>
    <NavBar/>
     <Routes>
        {/* auth */}
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>} />
         
          {/* public */}
         <Route path='/' element={<Home/>}/>
         <Route path='/events' element={<Events/>} />
          
          {/* user */}
          <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path='/event' element={<ProtectedRoute><Event/></ProtectedRoute>} />
       
           {/* admin */}
           <Route path='/admin' element={<DashboardAdmin/>}>
              <Route path='users' element={<UsersAdmin/>} />
              <Route path='organizers' element={<OrganizersAdmin/>} />
              <Route path='events' element={<EventsAdmin/>} />
              <Route path='create' element={<CategoryAdmin/>} />
              <Route path='categories' element={<CategoriesAdmin/>} />
           </Route>
           
           {/* organiser */}
           <Route path='/organiser' element={<Dashboard/>}>
              <Route path='myevents' element={<MyEvents/>} />
              <Route path='organizer' element={<Organizer/>} />
              <Route path='create' element={<CreateEvent/>} />
              
           </Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
