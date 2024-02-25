import axios from "axios";
import bcrypt from 'bcryptjs';


const API_URL = "http://localhost:3000";


export const bringAllArtist = async () => {
  const res = await axios.get(`${API_URL}/api/artist`);
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

export const createNewUser = async (registerData) => {
  const res = await axios.post(`${API_URL}/auth/register`, registerData);
  return res.data;
};

export const userLogin = async (credentials) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, credentials, {});
    const token = res.data.token;
    return token;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

export const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const res = await axios.get(`${API_URL}/api/users/profile2`, config);
  return res.data;
}
export const updateUser = async (token, updateData) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    };

    const res = await axios.patch(`${API_URL}/api/users/`,updateData, config);

    return res.data;
};
