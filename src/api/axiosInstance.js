import axios from "axios";
// import { config } from "process";


const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api'
})

apiClient.interceptors.request.use((config) => {
     // This function runs before every request made with apiClient

    const token = localStorage.getItem('authToken')


    if (token) {
    config.headers.Authorization = `Bearer ${token}`
    // Add the Authorization header to the request config
    // Only if a token exists - unauthenticated requests stay clean
    
}
return config

})


export default apiClient