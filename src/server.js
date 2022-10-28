const express = require('express')
const helmet = require("helmet");
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
app.use(helmet());
app.use(cors())
app.use(bodyParser.json())
const port = 3000


app.use("/invites", require("./routes/invites"));

app.listen(port, () => {
  console.log(` App listening on http://localhost:${port}/`)
})