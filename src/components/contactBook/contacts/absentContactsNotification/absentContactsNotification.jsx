import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './absentContactsNotification.module.css';

class AbsentContactsNotification extends Component {
  static propTypes = {
    searchedContact: PropTypes.string,
  };

  render() {
    return (
      <>
        <p className={styles.notification}>
          {this.props.searchedContact === ''
            ? "You haven't saved any contacts yet"
            : `" ${this.props.searchedContact} " is not saved in your contacts list`}
        </p>
      </>
    );
  }
}

export default AbsentContactsNotification;
