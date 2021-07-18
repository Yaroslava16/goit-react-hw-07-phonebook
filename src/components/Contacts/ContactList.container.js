import { connect } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/phonebook/phonebook-operations';
import ContactsList from './ContactsList';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
