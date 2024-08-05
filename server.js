/** Start server for Lunchly. */
const pass = require("./password")
process.env.PGPASSWORD = pass;
const app = require("./app");

app.listen(3000, function() {
  console.log("listening on 3000");
});
