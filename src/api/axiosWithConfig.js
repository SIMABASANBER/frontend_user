import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: "http://devsimaba.quizezz.online",
});

export default axiosWithConfig;