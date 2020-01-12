// Aqui definiremos nuestro cliente de Axios
import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
})


export default clienteAxios;