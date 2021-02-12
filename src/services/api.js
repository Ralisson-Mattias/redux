import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000'
})

// yarn json-server db.json -w -H 192.168.100.107

export default api