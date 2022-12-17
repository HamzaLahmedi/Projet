import './App.css';
import NAvBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom'
import Landpage from './pages/Landpage'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NAvBar/>
      <Routes>
      <Route path='/' element={<Landpage/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
