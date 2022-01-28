const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('db connection successful.'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
