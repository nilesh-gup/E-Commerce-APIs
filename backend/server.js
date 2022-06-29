const app = require("./app");
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

//Handling uncaught Exception - eg. console.log(youtube)
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
})

//Config
dotenv.config({path:"backend/config/config.env"})

//Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {

    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

//Unhandled Promise Rejection
//(config.env) => mongodb mispelled
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
