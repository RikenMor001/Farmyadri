import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import AuthModal from './Auth/AuthModal';
import { accommodationAPI, bookingAPI, paymentAPI, formatDateForAPI, calculateTotalAmount } from '../services/api';

const BookingFlow = ({ accommodation, onClose, onBookingSuccess }) => {
  const [currentStep, setCurrentStep] = useState('auth'); // 'auth', 'booking', 'payment'
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(true);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    specialRequests: '',
    paymentMethod: 'card'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { user, isAuthenticated } = useAuth();

  // Handle successful authentication
  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    setCurrentStep('booking');
  };

  // Handle booking submission
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setError('Please sign in to continue');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Check availability first
      const availabilityResponse = await accommodationAPI.checkAvailability(
        accommodation._id,
        bookingData.checkIn,
        bookingData.checkOut
      );

      if (!availabilityResponse.isAvailable) {
        setError('Selected dates are not available. Please choose different dates.');
        return;
      }

      // Calculate total amount
      const nights = Math.ceil(
        (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24)
      );
      const totalAmount = calculateTotalAmount(accommodation.price, nights);

      // Create booking
      const bookingResponse = await bookingAPI.create({
        accommodationId: accommodation._id,
        checkIn: formatDateForAPI(new Date(bookingData.checkIn)),
        checkOut: formatDateForAPI(new Date(bookingData.checkOut)),
        guests: bookingData.guests,
        specialRequests: bookingData.specialRequests,
        paymentMethod: bookingData.paymentMethod
      });

      // Move to payment step
      setCurrentStep('payment');
      
    } catch (error) {
      setError(error.message || 'Failed to create booking');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle payment submission
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Process payment (simplified for demo)
      const paymentResponse = await paymentAPI.process({
        bookingId: 'temp-booking-id', // In real app, this would come from the booking response
        paymentMethod: bookingData.paymentMethod,
        amount: calculateTotalAmount(accommodation.price, 
          Math.ceil((new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24))
        )
      });

      // Booking successful
      onBookingSuccess && onBookingSuccess();
      onClose();
      
    } catch (error) {
      setError(error.message || 'Payment failed');
    } finally {
      setIsLoading(false);
    }
  };

  // If user is not authenticated, show auth modal
  if (!isAuthenticated && currentStep === 'auth') {
    return (
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={onClose}
        onAuthSuccess={handleAuthSuccess}
        showSignupFirst={true}
      />
    );
  }

  // If user is authenticated, show booking form
  if (currentStep === 'booking') {
    // Calculate pricing
    const nights = bookingData.checkIn && bookingData.checkOut ? 
      Math.ceil((new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24)) : 0;
    const pricePerNight = accommodation.price;
    const subtotal = pricePerNight * nights;
    const taxes = subtotal * 0.18; // 18% GST
    const total = subtotal + taxes;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Book Your Stay</h2>
                <p className="text-slate-600">{accommodation.name}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Booking Form */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Booking Details</h3>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Check-in</label>
                      <input
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Check-out</label>
                      <input
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Guests</label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests</label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      rows="3"
                      placeholder="Any special requests or requirements..."
                    />
                  </div>
                </form>
              </div>

              {/* Pricing Card */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Pricing Summary</h3>
                
                {/* Accommodation Info */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-white rounded-lg">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{accommodation.name}</h4>
                    <p className="text-sm text-slate-600">{accommodation.type}</p>
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

                {/* Payment Methods */}
                <div className="mb-6">
                  <h4 className="font-medium text-slate-900 mb-3">Payment Methods</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                      { id: 'upi', label: 'UPI', icon: '📱' },
                      { id: 'netbanking', label: 'Net Banking', icon: '🏦' }
                    ].map(method => (
                      <label key={method.id} className="flex items-center p-2 hover:bg-white rounded-lg cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={bookingData.paymentMethod === method.id}
                          onChange={(e) => setBookingData({...bookingData, paymentMethod: e.target.value})}
                          className="mr-3"
                        />
                        <span className="mr-2">{method.icon}</span>
                        {method.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleBookingSubmit}
                  disabled={isLoading || !bookingData.checkIn || !bookingData.checkOut}
                  className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-700 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Continue to Payment'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Payment step (enhanced for Stripe integration)
  if (currentStep === 'payment') {
    const nights = Math.ceil(
      (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24)
    );
    const totalAmount = calculateTotalAmount(accommodation.price, nights);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl max-w-2xl w-full p-6"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Complete Your Payment</h2>
              <p className="text-slate-600">{accommodation.name} - {nights} night{nights > 1 ? 's' : ''}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Payment Method</label>
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
                          checked={bookingData.paymentMethod === method.id}
                          onChange={(e) => setBookingData({...bookingData, paymentMethod: e.target.value})}
                          className="mr-3 mt-1"
                        />
                        <div>
                          <div className="flex items-center">
                            <span className="mr-2">{method.icon}</span>
                            <span className="font-medium">{method.label}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{method.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Stripe Integration Placeholder */}
                {bookingData.paymentMethod === 'card' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-blue-900">Stripe Integration Ready</span>
                    </div>
                    <p className="text-xs text-blue-700">
                      Credit card processing will be handled securely through Stripe. 
                      You'll need to add your Stripe publishable key and implement the payment flow.
                    </p>
                  </div>
                )}

                {/* UPI Integration Placeholder */}
                {bookingData.paymentMethod === 'upi' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-green-900">UPI Integration Ready</span>
                    </div>
                    <p className="text-xs text-green-700">
                      UPI payment processing can be integrated with payment gateways like Razorpay or PayU.
                    </p>
                  </div>
                )}

                {/* Net Banking Integration Placeholder */}
                {bookingData.paymentMethod === 'netbanking' && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium text-purple-900">Net Banking Integration Ready</span>
                    </div>
                    <p className="text-xs text-purple-700">
                      Net banking can be integrated with payment gateways supporting Indian banks.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Summary */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Accommodation</span>
                  <span>{accommodation.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Check-in</span>
                  <span>{new Date(bookingData.checkIn).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Check-out</span>
                  <span>{new Date(bookingData.checkOut).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Guests</span>
                  <span>{bookingData.guests}</span>
                </div>
                <div className="border-t border-slate-200 pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Including taxes and fees</p>
                </div>
              </div>

              <button
                onClick={handlePaymentSubmit}
                disabled={isLoading}
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg hover:bg-slate-700 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing Payment...' : 'Pay ₹' + totalAmount.toLocaleString()}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
};

export default BookingFlow;
