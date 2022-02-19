import express from "express"
import UsersController from "./users.controller.js"
import ScoresController from "./scores.controller.js"

const router = express.Router()

router
  .route("/users")
  .get(UsersController.apiGetUsers)
  .post(UsersController.apiPostUser)

router
  .route("/scores")
  .get(ScoresController.apiGetScores)
  .post(ScoresController.apiPostScore)
export default router