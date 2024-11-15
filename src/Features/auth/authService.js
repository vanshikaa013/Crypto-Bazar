import axios from "axios";

const login = async (FormData) => {
  const response = await axios.post("/api/user/login", FormData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const register = async (FormData) => {
  const response = await axios.post("/api/user/register", FormData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const authService = {
  login, register
};

export default authService;
