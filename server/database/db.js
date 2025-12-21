// this file contain code for connect server to mangoDb database.

import mongoose from "mongoose";

// async-await are keyword used to make asynchronomus function simpler.
// await keyword ony used in async function.
// await keyword pause the execution of its surrounding async function untilled promise is setttled.


// process.env.MONGO_URI retrieves the MongoDB connection string from environment variables.

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("error occured", error);
  }
};
export default connectDB;




// 🧩 1. What happens without try...catch

// If your JavaScript code hits an error (for example, calling an undefined function), it immediately stops executing and shows an error in the console.

// Example:
// console.log("Start");
// nonExistentFunction(); // ❌ Error
// console.log("End"); // This line will never run
// Output:
// Start
// Uncaught ReferenceError: nonExistentFunction is not defined

// 🛡️ 2. What try...catch does

// try...catch allows you to catch that error and handle it gracefully, so the rest of your code can still run.
// ex.
// try {
//   console.log("Start");
//   nonExistentFunction(); // This will throw an error
//   console.log("End"); // Skipped
// } catch (error) {
//   console.log("Something went wrong:", error.message);
// }

// console.log("Program continues...");

// Output:
// Start
// Something went wrong: nonExistentFunction is not defined
// Program continues..

// ⚙️ 3. Syntax
// try {
//   // Code that might throw an error
// } catch (error) {
//   // Code to handle the error
// } finally {
//   // (Optional) Always runs, whether there was an error or not
// }

// Example:
// try {
//   console.log("Trying...");
//   throw new Error("Something failed");
// } catch (error) {
//   console.log("Caught:", error.message);
// } finally {
//   console.log("Cleaning up...");
// }
// Output:
// Trying...
// Caught: Something failed
// Cleaning up...