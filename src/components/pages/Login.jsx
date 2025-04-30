// src/pages/Login.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [showResend, setShowResend] = useState(false);
  const navigate = useNavigate();

  const generateOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('otp', randomOtp);
    localStorage.setItem('otpExpiry', Date.now() + 30000);
    alert(`Your OTP is: ${randomOtp}`);
    setShowResend(false);
    setError('');
  };

  useEffect(() => {
    generateOtp();
    const timer = setTimeout(() => setShowResend(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedOtp = localStorage.getItem('otp');
    const expiry = parseInt(localStorage.getItem('otpExpiry'));

    if (Date.now() > expiry) {
      setError('OTP expired. Please resend.');
      setShowResend(true);
    } else if (otp === savedOtp) {
      navigate('/dashboard');
    } else {
      setError('Incorrect OTP');
      setShowResend(true);
    }
  };

  const handleResend = () => {
    setOtp('');
    generateOtp();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }} className=''>
      <form onSubmit={handleSubmit}>
        <input
        className='border border-red-700'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
          Submit
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showResend && (
        <button className='' onClick={handleResend} style={{ marginTop: '10px', padding: '10px' }}>
          Resend OTP
        </button>
      )}
    </div>
  );
}

export default Login;
