const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');  // Import the connection
const User = require('./models/User');  // Import the User model
const bcrypt = require('bcryptjs');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Compare the entered password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in' });
    }
  });
  
  

  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Hash the password before saving it
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = new User({
        username,
        password: hashedPassword,
      });
  
      await user.save(); // Save user with hashed password
      res.json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error registering user' });
    }
  });
  