import mongoose from 'mongoose'



try {
  mongoose.set('useFindAndModify', false);
  mongoose.connect('', {

    useNewUrlParser:true,
    useUnifiedTopology: true,
  }),
     () =>
    console.log("connected");
} catch (error) {
  console.log("could not connect")
}
