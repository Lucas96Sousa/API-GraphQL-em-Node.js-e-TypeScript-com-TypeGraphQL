import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config();

const uri = process.env.DBACESS


try {
  mongoose.connect('mongodb+srv://lor:25252624@api.wypiw.mongodb.net/Graph?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true
  }),
     () =>
    console.log("connected");
} catch (error) {
  console.log("could not connect")
}