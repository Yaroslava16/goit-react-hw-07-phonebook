import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('contact/ADD_CONTACT', data => ({
  payload: {
    ...data,
    id: shortid.generate(),
  },
}));

export const deleteContact = createAction('contact/DELETE_CONTACT');

export const filter = createAction('contact/FILTER_CONTACT');
