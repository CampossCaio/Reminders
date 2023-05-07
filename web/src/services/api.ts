import axios from "axios";

import {
  whenRequestWithError,
  whenResponseWithError,
} from "../config/request/interceptors";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use((config) => config, whenRequestWithError);
api.interceptors.response.use((response) => response, whenResponseWithError);

export default api;
