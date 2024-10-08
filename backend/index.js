const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // Use authentication routes

const PORT = process.env.PORT || 5000;


connectDB().then(()=>{
  console.log("database Connection Successful");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => console.log("error occured in db ",err)
)