const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
//var cron = require('node-cron');
app.use(cors());
app.use(express.json());
app.use(require("./routes/record")); //REVIEW
// get driver connection
const dbo = require("./db/conn");


//var task = cron.schedule('5 * * * *', () =>  {
/*  axios 
  let db_connect = dbo.getDb("employees");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
}, {
  scheduled: false
});*/

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});