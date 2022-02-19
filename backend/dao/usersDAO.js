let users

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return
    }
    try {
      users = await conn.db(process.env.G_AIM).collection("users")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in usersDAO: ${e}`,
      )
    }
  }

  static async getUsers() {
    let query
    let cursor
    
    try {
      cursor = await users
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { usersList: [], totalNumUsers: 0 }
    }

    try {
      const usersList = await cursor.toArray()
      const totalNumUsers = await users.countDocuments(query)

      return { usersList, totalNumUsers }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { usersList: [], totalNumUsers: 0 }
    }
  }

  static async addUser(id, name, email, password, date) {
    try {
      const userDoc = { 
        user_id: id,
        name: name,
        email: email,
        password: password,
        dateCreated: date
      }

      return await users.insertOne(userDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

}