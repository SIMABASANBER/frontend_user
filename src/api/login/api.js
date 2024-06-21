import axiosWithConfig from "../axiosWithConfig";

export const login = async (username, password) => {
  try {
    const response = await axiosWithConfig.post("/auth/login", {
      username,
      password,
    });
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error("Email atau kata sandi salah");
  }
};