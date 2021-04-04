import axios from "axios";

export const BASE_URL = 'https://6065edd9b8fbbd0017567bab.mockapi.io/product';

export const requestProducts = async() => {
  const response = await axios.get(BASE_URL);
  const { data } = response;

  return data;
}

export const putComment = async (id, da) => {
  const response = await axios.put(`${BASE_URL}/${id}`, da);
  const { data } = response;

  return data;
}