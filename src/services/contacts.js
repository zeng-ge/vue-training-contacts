import axios from "axios";

export const getContacts = () => {
  return axios.get("/api/contacts");
};

export const getContactById = (id) => {
  return axios.get(`/api/contacts/${id}`);
};

export const addContact = (contact) => {
  return axios.post("/api/contacts", contact);
};

export const updateContact = (contact) => {
  return axios.put(`/api/contacts/${contact.id}`, contact);
};

export const removeContact = (contactId) => {
  return axios.delete(`/api/contacts/${contactId}`);
};
