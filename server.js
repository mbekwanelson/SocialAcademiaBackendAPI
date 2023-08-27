const 
  express = require("express"),
  app = express()

const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({
    name: "Home Page"
  })
})

app.listen(port, () => {
  console.log(`Serve listening on port ${port}`)
})