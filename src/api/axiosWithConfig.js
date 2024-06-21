import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: "https://devsimaba.quizezz.online",
});

export default axiosWithConfig;