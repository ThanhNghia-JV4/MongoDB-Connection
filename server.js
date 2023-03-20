const express = require("express");
const mongoose = require("mongoose");
const app = express();
//option1
const uri = 'mongodb+srv://<username>:<password>@mern-learn.dmjpofx.mongodb.net/<database-name>?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

//option2
const connectDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://<username>:<password>@mern-learn.dmjpofx.mongodb.net/<database-name>?retryWrites=true&w=majority`)
		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB();


app.listen(8000, () => {
  console.log("Server started on port 8000");
});