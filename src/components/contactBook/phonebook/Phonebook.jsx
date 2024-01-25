import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

import NameInput from './nameInput/NameInput';
import NumberInput from './numberInput/NumberInput';
import SubmitBtn from './submitBtn/SubmitBtn';

class Phonebook extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={styles.phonebook}>
        <h2>Phonebook</h2>

        <form onSubmit={this.props.handleSubmit}>
          <NameInput />
          <NumberInput />
          <SubmitBtn text="Add contact" />
        </form>
      </div>
    );
  }
}

export default Phonebook;
