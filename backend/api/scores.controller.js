import ScoresDAO from "../dao/scoresDAO.js"

export default class ScoresController {
  static async apiGetScores(req, res, next) {
    const { scoresList, totalNumScores } = await ScoresDAO.getScores()
    
    let response = {
      scores: scoresList,
      total_results: totalNumScores,
    }
    res.json(response)
  }

  static async apiPostScore(req, res, next) {
    try {
      const score = req.body.score
      const userInfo = {
        name: req.body.name,
        id: req.body.user_id
      }
      const date = new Date()

      const scoreResponse = await ScoresDAO.addScore(
        score,
        userInfo,
        date
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
