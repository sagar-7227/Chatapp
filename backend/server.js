const express =  require('express');
const chats = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use('/api/user',userRoutes);

// global user handlers
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => console.log('Server started on port 5000'));