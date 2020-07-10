import axios from 'axios';

export const getContacts = () => {
  return axios.get("/api/contacts");
};
