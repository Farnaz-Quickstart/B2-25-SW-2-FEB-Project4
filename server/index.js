import express from 'express';
import cors from 'cors';
import userRoute from './Routers/users.js';
import questionRout from './Routers/questions.js';
import categoryRout from './Routers/category.js';

const app = express();

app.use(express.json());  // To parse JSON bodies in requests
app.use(cors());          // To allow requests from all origins (good for development)

app.use('/users', userRoute)
app.use('/categories', categoryRout)
app.use('/questions', questionRout)

app.get('/', (req, res) => {
  res.send("Server running");
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000");
});