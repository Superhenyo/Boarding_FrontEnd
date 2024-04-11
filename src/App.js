import { UserProvider } from './UserContext';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';

// CSS imports
import '../src/CSS/App.css'
import '../src/CSS/Index.css'



// import Components
import WebNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import Register from './pages/Register';

// import Pages
function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })
  const unsetUser = () => {
    localStorage.clear()
  }

  console.log(`${process.env.REACT_APP_API_URL}`)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/getProfile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (typeof data._id !== "undefined") {
          setUser({
            id: data._id,
            isAdmin: data.isAdmin
          });
        } else {
          setUser({
            id: null,
            isAdmin: null
          });
        }
      })
  }, [])

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <WebNavBar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Register' element={<Register />} />
          <Route path='/logout' element={<Logout />} exact />
          <Route path='login' element={<Login />} exact />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
