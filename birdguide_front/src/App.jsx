import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import BirdList from './components/BirdList';
import BirdDetail from './components/BirdDetail';
import UserProfile from './components/UserProfile';
import FavoritesList from './components/FavoritesList';
import './styling/styles.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogin = (loggedInUserId) => {
    setIsLoggedIn(true);
    setUserId(loggedInUserId);
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Router>
      <div >
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<BirdList />} />
            <Route path="/birds/:id" element={<BirdDetail userId={userId} />} />
            <Route path="/profile" element={<UserProfile userId={userId} />} />
            <Route path="/users/:userId/favorites" element={<FavoritesList userId={userId} />} />
          </Routes>
        ) : (
          <div>
            {isRegistering ? (
              <div>
                <Register />
                <button onClick={toggleForm} className="link-button">
                  Voltar
                </button>
              </div>
            ) : (
              <div>
                <Login onLogin={handleLogin} />
                <button onClick={toggleForm} className="link-button">
                  Não possui cadastro? Registre-se!
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
