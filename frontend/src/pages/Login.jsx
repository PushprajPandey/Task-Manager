import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import Loader from '../components/Loader';
import { login } from '../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleEmailContinue = () => {
    if (!email) {
      setAlert({ type: 'error', message: 'Email is required' });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setAlert({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    setShowPasswordField(true);
    setAlert(null);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!password) {
      setAlert({ type: 'error', message: 'Password is required' });
      return;
    }

    setLoading(true);
    setAlert(null);

    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.data.token);
      setAlert({ type: 'success', message: response.message });
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      setAlert({
        type: 'error',
        message: error.response?.data?.message || 'Login failed. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    setAlert({ type: 'info', message: `${provider} login coming soon!` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1117] via-[#1a1d29] to-[#0f1117] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ top: '-10%', left: '-5%' }}></div>
        <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ bottom: '-10%', right: '-5%', animationDelay: '1s' }}></div>
      </div>

      <div className="bg-gradient-to-br from-[#252836] to-[#1f2230] rounded-3xl shadow-2xl p-10 w-full max-w-md relative z-10 border border-gray-700/50 animate-slide-up">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50 transform hover:scale-110 transition-transform duration-300">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">Welcome Back</h1>
        <p className="text-center text-gray-400 mb-8 text-sm">Sign in to manage your tasks efficiently</p>
        
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        <div className="space-y-3 mb-8">
          <button
            onClick={() => handleSocialLogin('Apple')}
            className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Continue with Apple
          </button>

          <button
            onClick={() => handleSocialLogin('Google')}
            className="w-full bg-[#2d3142] hover:bg-[#363a4f] text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 border border-gray-600/50 hover:border-gray-500 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#252836] text-gray-400 font-medium">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleEmailSubmit}>
          <div className="mb-5">
            <label className="block text-gray-300 text-sm font-semibold mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={showPasswordField}
                className="w-full bg-[#1a1d29] text-white px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-700/50 hover:border-gray-600 placeholder-gray-500 disabled:opacity-60 transition-all duration-200"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {showPasswordField && (
            <div className="mb-6 animate-slide-up">
              <label className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-[#1a1d29] text-white px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-700/50 hover:border-gray-600 placeholder-gray-500 transition-all duration-200"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {!showPasswordField ? (
            <button
              type="button"
              onClick={handleEmailContinue}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 transform hover:scale-[1.02] mb-4"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 transform hover:scale-[1.02] disabled:transform-none mb-4"
            >
              {loading ? <Loader size="small" /> : 'Sign In'}
            </button>
          )}
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
