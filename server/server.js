import express from 'express';
import cors from 'cors';
import 'dotenv/config'; 
import { clerkMiddleware,requireAuth} from '@clerk/express'

const app = express();

app.use(cors()) //so that the frontend can access backend resources even if origins(ports) are different.
app.use(express.json())
app.use(clerkMiddleware())

app.get('/',(req,res) => res.send('live'))

const PORT = process.env.PORT || 3000;

app.listen(PORT ,()=> {
  console.log('Server run on',PORT);
})

 
