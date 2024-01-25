import React, { Component } from 'react';
import { nanoid } from 'nanoid';
const numberInputId = nanoid();

class NumberInput extends Component {
  render() {
    return (
      <>
        <label htmlFor={numberInputId}>Number</label>
        <input
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </>
    );
  }
}

export default NumberInput;
