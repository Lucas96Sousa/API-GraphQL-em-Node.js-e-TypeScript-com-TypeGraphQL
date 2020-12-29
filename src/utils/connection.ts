import mongoose from 'mongoose'



try {
  mongoose.set('useFindAndModify', false);
  mongoose.connect('DB_CONNECT', {

    useNewUrlParser:true,
    useUnifiedTopology: true,
  }),
     () =>
    console.log("connected");
} catch (error) {
  console.log("could not connect")
}
