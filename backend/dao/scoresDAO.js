let scores

export default class ScoresDAO {
  static async injectDB(conn) {
    if (scores) {
      return
    }
    try {
      scores = await conn.db(process.env.G_AIM).collection("scores")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in scoresDAO: ${e}`,
      )
    }
  }

  static async getScores() {
    let query
    let cursor
    
    try {
      cursor = await scores
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { scoresList: [], totalNumScores: 0 }
    }

    try {
      const scoresList = await cursor.toArray()
      const totalNumScores = await scores.countDocuments(query)

      return { scoresList, totalNumScores }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { scoresList: [], totalNumScores: 0 }
    }
  }

  static async addScore(score, userInfo, date) {
    try {
      const scoreDoc = {
        name: userInfo.name,
        score: score,
        id: userInfo.id,
        dateOfScore: date
      }

      return await scores.insertOne(scoreDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

}