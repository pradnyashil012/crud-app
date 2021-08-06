import axios from "axios";

const url = "http://localhost:5000/business";

export const getBusinesses = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addBusiness = async (business) => {
  return await axios.post(url, business);
};

export const editBusiness = async (id, business) => {
  return await axios.put(`${url}/${id}`, business);
};

export const deleteBusiness = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
