import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.conteiner}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form />
        <h2 className={styles.secondTitle}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    );
  }
}

export default App;
