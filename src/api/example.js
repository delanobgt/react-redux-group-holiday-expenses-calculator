import axios from 'axios'

export default axios.create({
  baseURL: 'https://example.com',
  headers: {
    Authorization: 'Client-ID API_KEY'
  }
})
