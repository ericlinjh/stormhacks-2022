import UsersDAO from "../dao/usersDAO.js"

export default class UsersController {
  static async apiGetUsers(req, res, next) {
    const { usersList, totalNumUsers } = await UsersDAO.getUsers()
    
    let response = {
      users: usersList,
      total_results: totalNumUsers,
    }
    res.json(response)
  }

  static async apiPostUser(req, res, next) {
    try {
      const userId = req.body.user_id
      const name = req.body.name
      const email = req.body.email
      const password = req.body.password
      const date = new Date()

      const userResponse = await UsersDAO.addUser(
        userId,
        name,
        email,
        password,
        date
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
