import Axios from './api'

export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        return Axios.post('/validate', user)
            .then(res => res.status === 200 ? true : false)
            .catch(error => false)
    }
    return false
}

