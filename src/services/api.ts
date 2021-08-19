import axios from 'axios'

const baseURL = 'https://www.corona.ma.gov.br/public/api/'

export const api = axios.create({
  baseURL
})
