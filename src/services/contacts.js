import axios from "axios";

export const getContacts = () => {
  return axios.get("/api/contacts");
};

export const getContactById = id => {
  return axios.get(`/api/contacts/${id}`);
};
