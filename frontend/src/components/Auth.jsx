import React, { useState } from 'react';

export default function Auth({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'READER'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    const payload = isLogin 
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Store token and user details in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      onLoginSuccess(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-glow-greyDark text-white p-4">
      <div className="w-full max-w-md p-8 bg-glow-greyCard rounded-2xl shadow-2xl border border-glow-greyBorder">
        <h2 className="text-3xl font-bold text-center text-glow-pink mb-2">
          Glow Rea
        </h2>
        <p className="text-center text-glow-greyText text-sm mb-6">
          {isLogin ? 'Welcome back! Log in to continue.' : 'Create an account to start writing.'}
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/40 text-red-400 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-glow-greyText mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-glow-greyDark border border-glow-greyBorder rounded-lg focus:outline-none focus:border-glow-pink text-white"
                placeholder="Your name"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-glow-greyText mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-glow-greyDark border border-glow-greyBorder rounded-lg focus:outline-none focus:border-glow-pink text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-glow-greyText mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-glow-greyDark border border-glow-greyBorder rounded-lg focus:outline-none focus:border-glow-pink text-white"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-glow-greyText mb-1">I am a</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-glow-greyDark border border-glow-greyBorder rounded-lg focus:outline-none focus:border-glow-pink text-white"
              >
                <option value="READER">Reader</option>
                <option value="AUTHOR">Author / Writer</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-2 bg-glow-pink hover:bg-glow-pinkHover text-white font-semibold rounded-lg transition-colors shadow-lg shadow-glow-pink/20 disabled:opacity-50"
          >
            {loading ? 'Processing...' : isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-glow-greyText">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
            className="text-glow-pink font-semibold hover:underline ml-1"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </div>
    </div>
  );
}