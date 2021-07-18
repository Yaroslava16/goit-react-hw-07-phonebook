import { connect } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/phonebook/phonebook-operations';
import ContactsList from './ContactsList';

const getVisibleContacts = (filter, allContacts) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
};

const mapStateToProps = ({ phonebook: { filter, contacts } }) => ({
  contacts: getVisibleContacts(filter, contacts),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
