// import React from 'react'

// const Loginpage = () => {
//   return (
//     <div>Loginpage</div>
//   )
// }

// export default Loginpage




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [otpScreen, setOtpScreen] = useState(false);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  // Countdown Timer
  useEffect(() => {
    let interval;
    if (otpScreen && timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpScreen, timer]);

  // Generate and alert OTP
  const generateOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
    localStorage.setItem('otp', newOtp.toString());
    alert(`Your OTP is: ${newOtp}`);
  };

  const handleSendOtp = () => {
    if (!email) return alert('Please enter a valid email.');
    generateOtp();
    setOtpScreen(true);
    setTimer(30);
  };

  const handleValidate = () => {
    const storedOtp = localStorage.getItem('otp');
    if (otp === storedOtp) {
      navigate('/dashboard');
    } else {
      alert('Incorrect OTP. Please try again or resend.');
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      generateOtp();
      setTimer(30);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 text-white">
      {/* Header */}
      <header className="py-6 text-center text-2xl font-bold bg-black/30 backdrop-blur-md shadow-md">
        Analytics Dashboard
      </header>

      {/* Main */}
      <main className="flex flex-grow justify-center items-center px-4">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-3xl shadow-xl p-8">
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 space-y-4">
            {!otpScreen ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Sign In</h2>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full max-w-xs px-4 py-2 rounded-md bg-black/30 text-white placeholder-gray-300 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  onClick={handleSendOtp}
                  className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all"
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <h2 className="text-lg font-medium text-gray-200">Enter OTP sent to Email</h2>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="OTP"
                  className="w-full max-w-xs px-4 py-2 rounded-md bg-black/30 text-white placeholder-gray-300 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <div className="text-sm text-white/90 flex items-center gap-2">
                  <button
                    onClick={handleResend}
                    className={`font-semibold ${timer > 0 ? 'opacity-40 cursor-not-allowed' : 'hover:underline'}`}
                    disabled={timer > 0}
                  >
                    Resend OTP
                  </button>
                  <span className="text-xs">{`0:${timer < 10 ? `0${timer}` : timer} sec`}</span>
                </div>
                <button
                  onClick={handleValidate}
                  className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all"
                >
                  Validate
                </button>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/30 mx-4" />

          {/* Right Section */}
          <div className="flex-1 flex items-center justify-center text-center text-sm md:text-base p-4">
            Web Application with Analytics Dashboard
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-white/80 bg-black/30 backdrop-blur-md shadow-md">
        © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Loginpage;
