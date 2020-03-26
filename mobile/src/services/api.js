import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.68:3333" //ip da maquina pode pegar no http://localhost:19002/
});

export default api;
