import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import Signup from './Signup';

const AuthModal = ({ isOpen, onClose, onAuthSuccess, showSignupFirst = false }) => {
  const [isLogin, setIsLogin] = useState(!showSignupFirst);

  // Update the form type when showSignupFirst prop changes
  useEffect(() => {
    setIsLogin(!showSignupFirst);
  }, [showSignupFirst]);

  if (!isOpen) return null;

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  const handleAuthSuccess = () => {
    onAuthSuccess && onAuthSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-sm sm:max-w-md"
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 shadow-lg z-10 text-sm sm:text-base"
        >
          ×
        </button>
        
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Login 
                onSwitchToSignup={switchToSignup} 
                onClose={onClose}
                onAuthSuccess={handleAuthSuccess}
              />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Signup 
                onSwitchToLogin={switchToLogin} 
                onClose={onClose}
                onAuthSuccess={handleAuthSuccess}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthModal;
