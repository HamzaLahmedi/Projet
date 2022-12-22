import './App.css';
import NAvBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom'
import Landpage from './pages/Landpage'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Contact from './pages/Contact';
import PrivateRoute from './router/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userCurrent } from './redux/actions/authActions';
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    
      dispatch(userCurrent())
    

  },[dispatch])



  return (
    
    <div className="App">
      <NAvBar/>
      <Routes>
      <Route path='/' element={<Landpage/>} />
      <Route path='profile' element={
      
      <PrivateRoute>
      <Profile/>
      </PrivateRoute>
      } />
        <Route path='login' element={<Login/>} />
        <Route path='contact' element={
              <PrivateRoute>
        <Contact/>
        </PrivateRoute>
        } />
        <Route path='register' element={<Register/>} />

        <Route path='*' element={<NotFound/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
