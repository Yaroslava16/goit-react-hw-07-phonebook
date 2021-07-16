import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const addContact = data => dispatch => {
  const contact = { data, comleted: false };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export default addContact;
