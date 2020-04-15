import Axios from 'axios'

function getToken() {
    const check = JSON.parse(localStorage.getItem('user'))
    if(check) {
        return check.token
    }
    return ''
}

const api = Axios.create({
    baseURL: 'http://localhost:4000',
    headers: { 'Authorization': 'Bearer '+getToken() }
})

export default api