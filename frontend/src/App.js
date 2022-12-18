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
function App() {
  return (
    <div className="App">
      <NAvBar/>
      <Routes>
      <Route path='/' element={<Landpage/>} />
      <Route path='profile' element={<Profile/>} />
        <Route path='login' element={<Login/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='register' element={<Register/>} />

        <Route path='*' element={<NotFound/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
