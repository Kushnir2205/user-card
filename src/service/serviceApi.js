import axios from "axios";

const apiUsers = axios.create({
  baseURL: "https://64ad822eb470006a5ec60e72.mockapi.io",
});

export const getUsers = async () => {
  const { data } = await apiUsers.get("/users");
  return data;
};
