import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';

export default function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setShowAuth(false);
  };

  if (user) {
    return (
      <div className="min-h-screen bg-glow-greyDark text-white p-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center border-b border-glow-greyBorder pb-4">
          <h1 className="text-2xl font-bold text-glow-pink">Glow Rea</h1>
          <div className="flex items-center gap-4">
            <span className="text-glow-greyText">Welcome, <strong className="text-white">{user.name}</strong> ({user.role})</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-glow-greyCard hover:bg-glow-greyBorder text-white text-sm rounded-lg transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Phase 1 Complete! 🎉</h2>
          <p className="text-glow-greyText">
            You are logged in. Next up: building the Story management engine (Phase 2).
          </p>
        </div>
      </div>
    );
  }

  if (showAuth) {
    return <Auth onLoginSuccess={(userData) => setUser(userData)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-glow-greyDark text-white p-4">
      <div className="w-full max-w-sm p-8 bg-glow-greyCard rounded-2xl shadow-2xl border border-glow-greyBorder text-center">
        <h1 className="text-4xl font-extrabold text-glow-pink mb-2">
          Glow Rea
        </h1>
        <p className="text-glow-greyText text-sm mb-8 italic">
          Believe in delusion
        </p>
        <button
          onClick={() => setShowAuth(true)}
          className="w-full py-3 bg-glow-pink hover:bg-glow-pinkHover text-white font-semibold rounded-full transition-all shadow-lg shadow-glow-pink/30 hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
