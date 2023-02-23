const express = require('express')
const mongoose = require('mongoose')
const router = require("./routers/router")

const app = express()
app.use(express.json())

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://SagarMaan:yHJBlRWQ0FdJmdj6@chaudhary-shaab-db.cueddss.mongodb.net/Project-3(URL-Compresser)")
      .then(() => console.log("My DB is coonected"))
      .catch((err) => console.error(err))


app.use("/", router)

app.listen(process.env.port||3000, () => {
      console.log("Express app running on port " + 3000);
})
