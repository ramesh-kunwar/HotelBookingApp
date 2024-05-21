import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODb_CONNECTION_STRING as string, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
});


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());



app.get('/api/test', async  (req, res) => {

res.json({message: 'Hello World!'})
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});