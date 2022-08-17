import {createStore} from "vuex";

export default createStore({
    state: {
        contacts: [
            {
                id: 0,
                name: 'Владимир Путин',
                phone: '+7 (777) 777-77-77'
            },
            {
                id: 1,
                name: 'Алексей Навальный',
                phone: '+# (###) ###-##-##'
            }
        ]
    },
    mutations: {
        addContact(state, contact) {
            let temp_contact = {}
            temp_contact.id = contact.id
            temp_contact.phone = contact.phone
            temp_contact.name = contact.name
            state.contacts.unshift(temp_contact)
            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        },
        deleteContact(state, id) {
            state.contacts = state.contacts.filter(item => item.id !== id)
            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        },
        updateContact(state, contact) {
            state.contacts.forEach((el, index, array) => {
                el.id === contact.id
                    ? array[index] = contact
                    : null
            })
            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        }
    },
    getters: {
        getContacts(state) {
            state.contacts = JSON.parse(localStorage.getItem('contacts'))
            return state.contacts
        }
    }
})