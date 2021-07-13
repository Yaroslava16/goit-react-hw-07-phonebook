import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, filter } from './phonebook-actions';
import shortid from 'shortid';

const contactsInitialState = [
  { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
  { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
  { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
];

const сontactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: сontactsReducer,
  filter: filterReducer,
});

export default phonebookReducer;
