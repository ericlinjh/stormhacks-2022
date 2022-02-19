import axios from "axios"

const BASE_URL = 'http://localhost:5000/api/v1/g_aim'

export const getAllUsers = () => {
  return axios.get(BASE_URL + '/users')
}

export const createUser = (data) => {
  return axios.post(BASE_URL + '/users', { data })
}

export const getAllScores = () => {
  return axios.get(BASE_URL + '/scores')
}

export const createScore = (data) => {
  return axios.post(BASE_URL + '/scores', { data })
}