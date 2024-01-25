import React, { Component } from 'react';
import { nanoid } from 'nanoid';
const nameInputId = nanoid();

class NameInput extends Component {
  render() {
    return (
      <>
        <label htmlFor={nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}

export default NameInput;
