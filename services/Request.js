import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? 'https://api.021.inc' : 'http://localhost:9004';

export default {
  async addTask(data) {
    let res = await axios.post(api+'/lead', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async addSubscriber(data) {
    let res = await axios.post(api+'/subscribe', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}