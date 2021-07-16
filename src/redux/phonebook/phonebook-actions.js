import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');

export const addContactSuccess = createAction('/contats/addContactSuccess');

export const addContactError = createAction('/contacts/addContactError');

// export const addContact = createAction('contact/ADD_CONTACT', data => ({
//   payload: {
//     ...data,
//     id: shortid.generate(),
//   },
// }));

export const deleteContact = createAction('contact/DELETE_CONTACT');

export const filter = createAction('contact/FILTER_CONTACT');
