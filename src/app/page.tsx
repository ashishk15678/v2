"use client"
import React, { useState } from 'react';
import { Clock, Send, CheckCircle, ArrowRight, Calendar, Hourglass } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // In a real app, you would send this to your backend
    const sub = await fetch("/api/sub", { method: "POST", body: JSON.stringify({ email }) })
    console.log(sub.status, await sub.json())
    console.log('Email submitted:', email);
    setSubmitted(true);
    setError('');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className='absolute top-0 w-full h-6 bg-gradient-to-r from-violet-700 to-blue-500 grid place-items-center'>
        <p className='text-white font-bold' >Launching under a week , do join the waitlist ⭐</p>
      </div>
      <div className="max-w-md w-full bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div className="flex items-center justify-center mb-8">
          <Clock className="text-gray-800 h-8 w-8 mr-3" />
          <h1 className="text-4xl font-light text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            chrono<span className="font-bold italic">flow</span>
          </h1>
        </div>

        <h2 className="text-2xl text-center font-light text-gray-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="italic">Time</span> is of the essence
        </h2>

        <p className="text-gray-500 text-center mb-10 font-light">
          We're crafting a new way to utilize your time , make sure to subscribe for updates .
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-gray-800 bg-transparent text-gray-800 placeholder-gray-400 outline-none transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              {error && <p className="text-red-500 text-sm mt-2 font-light">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-100 hover:bg-zinc-200 hover:shadow-md text-black py-3 px-4 rounded-full flex items-center justify-center transition-all duration-300"

            >
              <span>Join the waitlist</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="flex justify-center mb-5">
              <CheckCircle className="h-16 w-16 text-gray-800" />
            </div>
            <h3 className="text-2xl font-light text-gray-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="italic">Welcome</span> to the journey
            </h3>
            <p className="text-gray-500 font-light">
              We'll notify you when we're ready to begin.
            </p>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <Calendar className="h-6 w-6 text-gray-800 mb-2" />
              <div className="text-sm text-gray-500 font-light">Join</div>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
              <div className="h-[1px] w-full bg-gray-200"></div>
            </div>

            <div className="flex flex-col items-center">
              <Hourglass className="h-6 w-6 text-gray-800 mb-2" />
              <div className="text-sm text-gray-500 font-light">Wait</div>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
              <div className="h-[1px] w-full bg-gray-200"></div>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="h-6 w-6 text-gray-800 mb-2" />
              <div className="text-sm text-gray-500 font-light">Access</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-gray-400 text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
        © 2025 chronoflow. All rights reserved.
      </div>

      {/* Font imports */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400&display=swap');
      `}} />
    </div>
  );
}

export default App;