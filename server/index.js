
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);


// const CONNECTION_URL='mongodb+srv://social_media:social_media123@cluster0.4fcmt9w.mongodb.net/?retryWrites=true&w=majority';
// const CONNECTION_URL = "mongodb+srv://ashish236:YQpuVDID2TxDAxtY@cluster0.2lkbjni.mongodb.net/Memories";


const CONNECTION_URL = "mongodb+srv://ashish236:YQpuVDID2TxDAxtY@cluster0.2lkbjni.mongodb.net/Memories";

const PORT = process.env.PORT|| 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

