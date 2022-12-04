import axios from "axios";
import constants from './constants'

const instance = axios.create({
    baseURL : constants.baseUrl
})

export default instance