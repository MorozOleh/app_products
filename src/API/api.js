import axios from "axios";

export const BASE_URL = 'https://6065edd9b8fbbd0017567bab.mockapi.io/product';

export const requestProducts = async() => {

  try {
    const response = await axios.get(BASE_URL);
  
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error)
  }
}

export const requestProduct = async (id) => {
  console.log('request product');

  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
  
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error)
  }
}

export const putProduct = async (id, da) => {
  const response = await axios.put(`${BASE_URL}/${id}`, da);
  const { data } = response;

  return data;
}