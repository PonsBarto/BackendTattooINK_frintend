import axios from "axios";

const API_URL = "https://localhost:3000";

export const bringAllCharacters = async () => {
  const res = await axios.get(`${API_URL}/character`);
  return res.data.results;
};

export const bringAllArtist = async () => {
  const res = await axios.get(`${API_URL}/artist`);
  return res.data;
};
export const getArtistById = async (id) => {
  const res = await axios.get(`${API_URL}/artist/${id}`);
  return res.data;
};
export const bringAllUsers = async () => {
  const res = await axios.get(`${API_URL}/users`);
  return res.data;
};

export const userLogin = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, credentials, {});
    const token = res.data.token;
    return token;
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};

export const getProfile = async (token) => {
  const config = {
    headers: {
      Authorizarition: "Bearer " + token,
    },
  };
  const res = await axios.get(`${API_URL}/users/profile`, config);
  return res.data;
};
