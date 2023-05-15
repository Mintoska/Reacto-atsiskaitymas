import React, { useState } from 'react';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Tikrina vartotojo prisijungimą
    // Tavo prisijungimo logika
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // Tikrina registracijos formą
    // Tavo registracijos logika
    if (password === confirmPassword) {
      setIsRegistered(true);
    } else {
      setPasswordMatchError(true);
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Sveikas, {username}!</h2>
        <button onClick={handleLogout}>Atsijungti</button>
      </div>
    );
  }

  if (isRegistered) {
    return (
      <div>
        <form onSubmit={handleLogin}>
          <h2>Prisijungimas</h2>
          <input
            type="email"
            placeholder="El. paštas"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Slaptažodis"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Prisijungti</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <h2>Registracija</h2>
        <input
          type="email"
          placeholder="El. paštas"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vartotojo vardas"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Slaptažodis"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Pakartokite slaptažodį"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {passwordMatchError && (
          <p style={{ color: 'red' }}>Slaptažodžiai nesutampa!</p>
        )}
        <button type="submit">Registruotis</button>
      </form>
    </div>
  );
};

export default LoginForm;
