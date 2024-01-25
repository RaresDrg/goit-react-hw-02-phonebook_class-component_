import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './contactsList.module.css';

class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul className={styles.contactsList}>
        {this.props.contacts.map(item => (
          <li key={item.id}>
            <span>{item.name.toLowerCase()}</span>: <span>{item.number}</span>
            <button
              onClick={this.props.handleDelete}
              id={item.id}
              type="button"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;
