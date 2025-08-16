import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import AuthModal from './Auth/AuthModal';

const PaymentModal = ({ accommodation, onClose }) => {
  const [selectedDates, setSelectedDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isAuthenticated, user } = useAuth();

  // Calculate pricing
  const nights = selectedDates.checkIn && selectedDates.checkOut ? 
    Math.ceil((new Date(selectedDates.checkOut) - new Date(selectedDates.checkIn)) / (1000 * 60 * 60 * 24)) : 0;
  const pricePerNight = accommodation.price;
  const subtotal = pricePerNight * nights;
  const taxes = subtotal * 0.18; // 18% GST
  const total = subtotal + taxes;

  const handlePayment = async () => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    if (!selectedDates.checkIn || !selectedDates.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment processed successfully for ${accommodation.name}!\nTotal: ₹${total.toLocaleString()}\nCheck-in: ${selectedDates.checkIn}\nCheck-out: ${selectedDates.checkOut}\nGuests: ${guests}\nBooked by: ${user?.firstName} ${user?.lastName}`);
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4"
      >
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <div className="flex-1 pr-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Book Your Stay</h2>
              <p className="text-sm sm:text-base text-slate-600">{accommodation.name}</p>
              {isAuthenticated && (
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs sm:text-sm text-green-600 font-medium">
                    Signed in as {user?.firstName} {user?.lastName}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold flex-shrink-0"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Side - Booking Details */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Booking Details</h3>
              
              <div className="space-y-4">
                {/* Date Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Check-in</label>
                    <input
                      type="date"
                      value={selectedDates.checkIn}
                      onChange={(e) => setSelectedDates({...selectedDates, checkIn: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm sm:text-base"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Check-out</label>
                    <input
                      type="date"
                      value={selectedDates.checkOut}
                      onChange={(e) => setSelectedDates({...selectedDates, checkOut: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm sm:text-base"
                      min={selectedDates.checkIn || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                {/* Payment Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Payment Method</label>
                  <div className="space-y-2">
                    {[
                      { id: 'card', label: 'Credit/Debit Card', icon: '💳', description: 'Visa, Mastercard, RuPay' },
                      { id: 'upi', label: 'UPI', icon: '📱', description: 'Google Pay, PhonePe, Paytm' },
                      { id: 'netbanking', label: 'Net Banking', icon: '🏦', description: 'All major banks' }
                    ].map(method => (
                      <label key={method.id} className="flex items-start p-3 border border-slate-200 rounded-lg hover:border-slate-300 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3 mt-1 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center">
                            <span className="mr-2 text-lg">{method.icon}</span>
                            <span className="font-medium text-sm sm:text-base">{method.label}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{method.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Stripe Integration Info */}
                {paymentMethod === 'card' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-blue-900">Stripe Integration Ready</span>
                    </div>
                    <p className="text-xs text-blue-700">
                      Credit card processing will be handled securely through Stripe. 
                      Ready for integration with your Stripe account.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Pricing & Payment */}
            <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Pricing Summary</h3>
              
              {/* Accommodation Info */}
              <div className="flex items-center space-x-3 mb-4 p-3 bg-white rounded-lg">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base truncate">{accommodation.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600">{accommodation.type}</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Price per night</span>
                  <span>₹{pricePerNight.toLocaleString()}</span>
                </div>
                
                {nights > 0 && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span>{nights} night{nights > 1 ? 's' : ''}</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>Taxes & Fees (18% GST)</span>
                      <span>₹{taxes.toLocaleString()}</span>
                    </div>
                    
                    <div className="border-t border-slate-200 pt-2">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₹{total.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">All prices in Indian Rupees (INR)</p>
                    </div>
                  </>
                )}
              </div>

              {/* Authentication Warning */}
              {!isAuthenticated && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium text-amber-900">Sign in required</span>
                  </div>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    You need to sign in to book this accommodation. Click the payment button below to sign in.
                  </p>
                </div>
              )}

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing || !selectedDates.checkIn || !selectedDates.checkOut}
                className={`w-full py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${
                  isAuthenticated 
                    ? 'bg-slate-900 text-white hover:bg-slate-700' 
                    : 'bg-amber-500 text-white hover:bg-amber-600'
                }`}
              >
                {isProcessing ? 'Processing Payment...' : 
                 isAuthenticated ? `Pay ₹${total > 0 ? total.toLocaleString() : '0'}` : 'Sign in to Book'}
              </button>

              {/* Terms */}
              <p className="text-xs text-slate-500 mt-3 text-center leading-relaxed">
                By clicking "Pay", you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={handleAuthSuccess}
          showSignupFirst={false}
        />
      )}
    </div>
  );
};

export default PaymentModal;
