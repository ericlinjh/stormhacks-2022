import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import UsersDAO from "./dao/usersDAO.js"
import ScoresDAO from "./dao/scoresDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.G_AIM_DB_URI,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewURLParser: true
  }
)
.catch(err => {
  console.error(err.stack)
  process.exit()
})
.then(async client => {
  await UsersDAO.injectDB(client)
  await ScoresDAO.injectDB(client)
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})