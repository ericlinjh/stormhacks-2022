import express from "express"
import UsersController from "./users.controller.js"

const router = express.Router()

router
  .route("/users")
  .get(UsersController.apiGetUsers)
  .post(UsersController.apiPostUser)

export default router