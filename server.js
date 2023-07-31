const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const app = require("./app");

// Database URL
// const DB = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );
const DB=process.env.DB_URL;

// Database connection
const mongo = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB connection successful!`))
  .catch((err)=>console.log(err));

const port = process.env.PORT || 3000;

// server is started.
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
