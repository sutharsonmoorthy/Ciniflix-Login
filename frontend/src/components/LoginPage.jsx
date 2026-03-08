import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  function handleLogin(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError("Please enter both email and password.")
      return;
    }

    axios.post(`${API_BASE_URL}/api/login`, { email, password })
      .then(function (response) {
        if (response.data.success) {
          navigate('/dashboard')
        }
      })
      .catch(function (err) {
        setError(err.response?.data?.message || "Invalid credentials")
      })
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans bg-black md:bg-gradient-to-b md:from-[#600207] md:to-black">

      <div className="absolute top-0 left-0 w-full md:w-auto p-6 md:p-10 z-30 flex justify-center md:justify-start">
        <h1 className="text-red-600 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter drop-shadow-lg select-none">
          CINIFLIX
        </h1>
      </div>

      <div className="relative z-10 bg-black/85 p-8 sm:p-12 md:p-16 rounded-md w-full h-screen md:h-auto max-w-[450px] shadow-2xl backdrop-blur-[1px] flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-white mb-8 md:mb-10">Sign In</h2>

        {error && (
          <div className="bg-[#e87c03] text-white p-3 rounded mb-6 text-[14px]">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4 md:gap-6">
          <input
            type="email"
            placeholder="Email or phone number"
            className="p-4 rounded bg-[#333]/70 text-white outline-none border-b-2 border-transparent focus:border-zinc-400 transition-all placeholder:text-zinc-500 h-14"
            onChange={handleEmail}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded bg-[#333]/70 text-white outline-none border-b-2 border-transparent focus:border-zinc-400 transition-all placeholder:text-zinc-500 h-14"
            onChange={handlePassword}
            value={password}
          />
          <button
            type="submit"
            className="bg-[#E50914] hover:bg-[#c10710] text-white py-4 rounded font-bold mt-6 md:mt-8 transition-colors duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-zinc-500 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-zinc-500" defaultChecked /> Remember me
          </label>
          <p className="hover:underline cursor-pointer">Need help?</p>
        </div>

        <div className="mt-12 md:mt-20">
          <p className="text-zinc-600">New to Ciniflix? <span className="text-white hover:underline cursor-pointer font-medium">Sign up now.</span></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;