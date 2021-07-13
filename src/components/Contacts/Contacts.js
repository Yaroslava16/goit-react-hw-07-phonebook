import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from '../Contacts/Contacts.module.css';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';

const Contacts = ({ contacts, onDelete }) => (
  <>
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.itemContact} key={id}>
          <span>
            {name}: {number}
          </span>
          <button className={styles.btn} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
