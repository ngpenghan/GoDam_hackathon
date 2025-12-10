import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Client
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;
let usersCollection;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db('myid_plus');
    usersCollection = db.collection('users');
    
    // Create IC index for uniqueness
    await usersCollection.createIndex({ ic: 1 }, { unique: true });
    
    // Ping to verify connection
    await db.admin().ping();
    console.log('✓ Pinged your deployment. Successfully connected to MongoDB!');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
}

// Routes

// GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await usersCollection.find({}).toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET user by IC
app.get('/api/users/:ic', async (req, res) => {
  try {
    const user = await usersCollection.findOne({ ic: req.params.ic });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create user
app.post('/api/users', async (req, res) => {
  try {
    const { name, ic, bloodType } = req.body;
    
    if (!name || !ic || !bloodType) {
      return res.status(400).json({ error: 'Name, IC, and blood type are required' });
    }
    
    const newUser = {
      ...req.body,
      createdAt: new Date(),
    };
    
    const result = await usersCollection.insertOne(newUser);
    res.status(201).json({ _id: result.insertedId, ...newUser });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ error: 'User with this IC already exists' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// PUT update user
app.put('/api/users/:ic', async (req, res) => {
  try {
    const result = await usersCollection.findOneAndUpdate(
      { ic: req.params.ic },
      { $set: { ...req.body, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );
    
    if (!result.value) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(result.value);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE user
app.delete('/api/users/:ic', async (req, res) => {
  try {
    const result = await usersCollection.deleteOne({ ic: req.params.ic });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start server
async function startServer() {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`✓ Server running at http://localhost:${PORT}`);
    console.log(`✓ API endpoints available at http://localhost:${PORT}/api/users`);
  });
}

startServer().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
