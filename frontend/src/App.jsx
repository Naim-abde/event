import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/user/Home";
import Profile from "./pages/user/Profile";
import ProtectedRoute from "./router/Route";
import Events from "./pages/user/Events";
import EventsAdmin from "./pages/admin/EventsAdmin";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Dashboard from "./pages/organizer/Dashboard";
import CreateEvent from "./pages/organizer/CreateEvent";
import MyEvents from "./pages/organizer/MyEvents";
import EditEvent from "./pages/organizer/EditEvent";
import Finance from "./pages/organizer/finance";
import Organizer from "./pages/organizer/Organizer";
import Users from "./pages/admin/UsersAdmin";
import Organizers from "./pages/admin/OrganizersAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import UsersAdmin from "./pages/admin/UsersAdmin";
import OrganizersAdmin from "./pages/admin/OrganizersAdmin";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
           <Route path="events" element={<MyEvents/>} />
            <Route path="create" element={<CreateEvent/>} />
             <Route path="finance" element={<Finance/>} />
             <Route path="organiser" element={<Organizer/>} />
        </Route>
        <Route path="/admin" element={<DashboardAdmin/>}>
           <Route path="users" element={<UsersAdmin/>} />
            <Route path="organizers" element={<OrganizersAdmin/>} />
             <Route path="events" element={<EventsAdmin/>} />
        </Route>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/profile"} element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        } />
         <Route path={"/events"} element={<Events/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
