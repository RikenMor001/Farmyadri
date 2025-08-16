# Farm Yadri Backend API

A comprehensive backend API for Farm Yadri, a nature-based resort website. This API handles user authentication, accommodation management, booking systems, and payment processing.

## Features

- 🔐 **User Authentication**: Secure signup/signin with JWT tokens
- 🏠 **Accommodation Management**: CRUD operations for resort accommodations
- 📅 **Booking System**: Complete booking lifecycle management
- 💳 **Payment Processing**: Support for multiple payment methods
- 👨‍💼 **Admin Panel**: Administrative controls and monitoring
- 🔒 **Security**: Password hashing, JWT authentication, and role-based access

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **CORS**: Enabled for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   cd farmyadri/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Ensure MongoDB is running on your system
   - The API will connect to `mongodb://localhost:27017/farmyadri`

4. **Environment Variables** (Optional)
   - Create a `.env` file for production settings
   - Update JWT_SECRET in production

5. **Start the server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:3000`

## API Endpoints

### 🔐 Authentication

#### User Registration
```
POST /api/auth/signup
```
**Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "password123"
}
```

#### User Login
```
POST /api/auth/signin
```
**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User Profile
```
GET /api/auth/profile
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### 🏠 Accommodations

#### Get All Accommodations
```
GET /api/accommodations
```
**Query Parameters:**
- `type`: Filter by accommodation type
- `minPrice`: Minimum price filter
- `maxPrice`: Maximum price filter
- `guests`: Minimum guest capacity
- `available`: Filter by availability (true/false)

#### Get Accommodation by ID
```
GET /api/accommodations/:id
```

#### Check Availability
```
POST /api/accommodations/:id/availability
```
**Body:**
```json
{
  "checkIn": "2025-02-15",
  "checkOut": "2025-02-17"
}
```

### 📅 Bookings

#### Create Booking
```
POST /api/bookings
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`
**Body:**
```json
{
  "accommodationId": "accommodation_id_here",
  "checkIn": "2025-02-15",
  "checkOut": "2025-02-17",
  "guests": 2,
  "specialRequests": "Early check-in if possible",
  "paymentMethod": "card"
}
```

#### Get User Bookings
```
GET /api/bookings
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`
**Query Parameters:**
- `status`: Filter by booking status

#### Get Booking by ID
```
GET /api/bookings/:id
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`

#### Cancel Booking
```
PATCH /api/bookings/:id/cancel
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### 💳 Payments

#### Process Payment
```
POST /api/payments
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`
**Body:**
```json
{
  "bookingId": "booking_id_here",
  "paymentMethod": "card",
  "cardDetails": {
    "last4Digits": "1234",
    "cardType": "Visa",
    "expiryMonth": "12",
    "expiryYear": "25"
  }
}
```

#### Get Payment Details
```
GET /api/payments/:id
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`

### 👨‍💼 Admin Routes

#### Get All Bookings (Admin Only)
```
GET /api/admin/bookings
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`
**Query Parameters:**
- `status`: Filter by booking status
- `page`: Page number for pagination
- `limit`: Items per page

#### Update Booking Status (Admin Only)
```
PATCH /api/admin/bookings/:id/status
```
**Headers:** `Authorization: Bearer <JWT_TOKEN>`
**Body:**
```json
{
  "status": "confirmed"
}
```

### 🏥 Health Check

#### API Status
```
GET /api/health
```

## Data Models

### User Schema
```javascript
{
  firstName: String (required, max 50 chars),
  lastName: String (required, max 50 chars),
  email: String (required, unique, email format),
  phone: String (required, 10 digits),
  password: String (required, min 6 chars),
  role: String (enum: 'user', 'admin', default: 'user'),
  isVerified: Boolean (default: false),
  createdAt: Date,
  lastLogin: Date,
  timestamps: true
}
```

### Accommodation Schema
```javascript
{
  name: String (required, max 100 chars),
  type: String (required),
  price: Number (required, min 0),
  rating: Number (default 0, min 0, max 5),
  reviews: Number (default 0, min 0),
  guests: Number (required, min 1),
  bedrooms: Number (required, min 1),
  bathrooms: Number (required, min 1),
  image: String (required),
  amenities: [String],
  description: String (required, max 500 chars),
  isAvailable: Boolean (default true),
  location: {
    address: String,
    city: String,
    state: String,
    country: String,
    coordinates: { latitude: Number, longitude: Number }
  },
  timestamps: true
}
```

### Booking Schema
```javascript
{
  user: ObjectId (ref: User, required),
  accommodation: ObjectId (ref: Accommodation, required),
  checkIn: Date (required),
  checkOut: Date (required),
  guests: Number (required, min 1),
  totalAmount: Number (required, min 0),
  nights: Number (required, min 1),
  status: String (enum: 'pending', 'confirmed', 'cancelled', 'completed'),
  specialRequests: String (max 500 chars),
  paymentStatus: String (enum: 'pending', 'paid', 'failed', 'refunded'),
  paymentMethod: String (enum: 'card', 'upi', 'netbanking'),
  cancellationPolicy: {
    canCancel: Boolean,
    cancellationDeadline: Date,
    refundPercentage: Number
  },
  timestamps: true
}
```

### Payment Schema
```javascript
{
  booking: ObjectId (ref: Booking, required),
  user: ObjectId (ref: User, required),
  amount: Number (required, min 0),
  currency: String (default: 'INR'),
  paymentMethod: String (enum: 'card', 'upi', 'netbanking'),
  status: String (enum: 'pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'),
  transactionId: String (unique),
  gatewayResponse: {
    success: Boolean,
    message: String,
    code: String,
    timestamp: Date
  },
  cardDetails: { last4Digits, cardType, expiryMonth, expiryYear },
  upiDetails: { upiId, vpa },
  netbankingDetails: { bankName, accountType },
  refundDetails: { refundAmount, refundReason, refundDate },
  timestamps: true
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Registration/Login**: Returns a JWT token
2. **Protected Routes**: Include `Authorization: Bearer <JWT_TOKEN>` header
3. **Token Expiry**: 7 days by default
4. **Password Security**: Hashed using bcryptjs with salt rounds of 10

## Error Handling

The API returns consistent error responses:

```json
{
  "message": "Error description",
  "status": "error"
}
```

**Common HTTP Status Codes:**
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive data validation
- **Role-Based Access**: User and admin role separation
- **CORS**: Cross-origin resource sharing enabled
- **SQL Injection Protection**: Mongoose ODM protection

## Development

### Running in Development Mode
```bash
npm run dev
```
Uses nodemon for auto-restart on file changes.

### Database Seeding
You can create sample data by adding a seeding script or using MongoDB Compass to manually insert data.

### Testing
```bash
npm test
```

## Production Considerations

1. **Environment Variables**: Use `.env` file for sensitive data
2. **JWT Secret**: Change default JWT secret
3. **MongoDB**: Use production MongoDB instance
4. **HTTPS**: Enable HTTPS in production
5. **Rate Limiting**: Implement rate limiting for production
6. **Logging**: Add comprehensive logging
7. **Monitoring**: Implement health checks and monitoring

## Support

For technical support or questions about the API, please refer to the project documentation or contact the development team.

---

**Farm Yadri** - Experience serenity and transformation at our wellness resort nestled in the heart of nature.
