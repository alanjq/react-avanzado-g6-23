const baseUrl = 'https://api.escuelajs.co/api/v1'

export const API = {
    get: (endpoint) => fetch(`${baseUrl}/${endpoint}`)
}

export default API
