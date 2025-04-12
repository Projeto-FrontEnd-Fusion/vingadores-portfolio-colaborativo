import axios from 'axios'

const usersInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

const membersInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

export { usersInstance, membersInstance }
