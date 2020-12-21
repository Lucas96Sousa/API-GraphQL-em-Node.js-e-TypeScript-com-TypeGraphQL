import mongoose from 'mongoose'



try {
  mongoose.set('useFindAndModify', false);
  mongoose.connect('mongodb+srv://lor:25252624@api.wypiw.mongodb.net/Graph?retryWrites=true&w=majority', {

    useNewUrlParser:true,
    useUnifiedTopology: true,
  }),
     () =>
    console.log("connected");
} catch (error) {
  console.log("could not connect")
}