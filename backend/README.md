# MyID+ Backend Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas cloud)

## Installation

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file and add:
MONGODB_URI=mongodb://localhost:27017
PORT=5000
```

## Running the Backend

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Get User by IC
```
GET /api/users/:ic
```

### Get All Users
```
GET /api/users
```

### Create New User
```
POST /api/users
Content-Type: application/json

{
  "name": "Ahmad bin Abdullah",
  "ic": "900101-01-1234",
  "bloodType": "O+",
  "dateOfBirth": "1990-01-01",
  "gender": "Male",
  "address": "123 Jalan Merdeka, Kuala Lumpur",
  "phone": "+60123456789",
  "email": "ahmad@example.com",
  "allergies": ["Penicillin"],
  "medications": [],
  "emergencyContact": {
    "name": "Fatimah binti Abdullah",
    "relationship": "Sister",
    "phone": "+60198765432"
  }
}
```

### Update User
```
PUT /api/users/:ic
Content-Type: application/json

{
  "bloodType": "O+",
  "allergies": ["Penicillin", "Aspirin"]
}
```

### Delete User
```
DELETE /api/users/:ic
```

## Database Schema

```javascript
{
  _id: ObjectId,
  name: String,
  ic: String (unique),
  bloodType: String,
  dateOfBirth: Date,
  gender: String,
  address: String,
  phone: String,
  email: String,
  allergies: Array,
  medications: Array,
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

## Using with Frontend

Update `src/main.tsx` or component to use the service:

```typescript
import { createUser, getUserByIC } from './services/userService'

// Get user
const user = await getUserByIC('900101-01-1234')

// Create user
const newUser = await createUser({
  name: 'Ahmad',
  ic: '900101-01-1234',
  bloodType: 'O+'
})
```

## MongoDB Atlas Setup (Cloud)

1. Create account at [mongodb.com](https://mongodb.com)
2. Create a cluster
3. Get connection string
4. Update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
```

## Local MongoDB Setup

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use default connection: `mongodb://localhost:27017`
