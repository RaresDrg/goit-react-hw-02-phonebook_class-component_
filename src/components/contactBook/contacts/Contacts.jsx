import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

import AbsentContactsNotification from './absentContactsNotification/absentContactsNotification';
import ContactsList from './contactsList/contactsList';
import FilterContactsInput from './filterContactsInput/FilterContactsInput';

class Contacts extends Component {
  static propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  filterContacts() {
    const contactsFiltered = this.props.contacts.filter(item =>
      item.name.toUpperCase().includes(this.props.filter.toUpperCase())
    );
    return contactsFiltered;
  }

  render() {
    return (
      <div className={styles.contacts}>
        <h2>Contacts</h2>

        <FilterContactsInput handleInputChange={this.props.handleInputChange} />

        {this.filterContacts().length > 0 ? (
          <ContactsList
            contacts={this.filterContacts()}
            handleDelete={this.props.handleDelete}
          />
        ) : (
          <AbsentContactsNotification searchedContact={this.props.filter} />
        )}
      </div>
    );
  }
}

export default Contacts;
