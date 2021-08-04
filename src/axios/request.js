import axios from "axios";

const request = axios.create({
  baseURL: 'http://g1s.hfbdqn.cn',
  timeout: 4000
})

export default request
