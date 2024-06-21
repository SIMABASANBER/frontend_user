import axiosWithConfig from "../axiosWithConfig";

export const register = async (
  fullname,
  from_school,
  graduation_year,
  email,
  username,
  password
) => {
  try {
    const response = await axiosWithConfig.post("/auth/register", {
      fullname,
      from_school,
      graduation_year,
      email,
      username,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
