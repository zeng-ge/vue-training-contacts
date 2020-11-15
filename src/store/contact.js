import {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact
} from '../services/contacts'
export default {
  namespaced: true,
  state: {
    keyword: '',
    contactDetail: { telphone: {} },
    contacts: []
  },
  getters: {
    filterContacts(state) {
      const { contacts, keyword } = state
      return keyword
        ? contacts.filter(contact => contact.name.indexOf(keyword) !== -1)
        : contacts
    }
  },
  mutations: {
    updateKeyword(state, keyword) {
      state.keyword = keyword
    },
    getContactById(state, contactDetail) {
      state.contactDetail = contactDetail
    },
    getContacts(state, contacts) {
      state.contacts = contacts
    }
  },
  actions: {
    updateKeyword(context, keyword) {
      context.commit('updateKeyword', keyword)
    },
    async getContactById(context, contactId) {
      const response = await getContactById(contactId)
      context.commit('getContactById', response.data)
    },
    async getContacts(context) {
      const response = await getContacts()
      context.commit('getContacts', response.data)
    },
    async addContact(context, contact) {
      await addContact(contact)
      context.dispatch('getContacts')
    },
    async updateContact(context, contact) {
      await updateContact(contact)
      context.dispatch('getContactById', contact.id)
    },
    async removeContact(context, contactId) {
      await removeContact(contactId)
      context.dispatch('getContacts')
    }
  }
}
