const mongoose = require("mongoose");

const connectDB = (uri) => {

  uri = "mongodb+srv://chandubopche321:k7bdZLhXh8ii5bpy@cluster0.mbmsuxg.mongodb.net/EcomReact?retryWrites=true&w=majority";
  
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
