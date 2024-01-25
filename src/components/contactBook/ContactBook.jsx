import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './section/Section';
import Phonebook from './phonebook/Phonebook';
import Contacts from './contacts/Contacts';

class ContactBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const checkExistence = this.state.contacts.find(
      item => item.name.toUpperCase() === name.toUpperCase()
    );

    checkExistence
      ? alert(`"${name}" is already in contacts`)
      : this.setState(prev => {
          const newContact = { id: nanoid(), name, number };
          return { contacts: [...prev.contacts, newContact] };
        });

    form.reset();
  };

  handleInputChange = event => {
    this.setState({ filter: event.target.value.trim() });
  };

  handleContactDelete = ({ target }) => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(item => item.id !== target.id) };
    });
  };

  render() {
    return (
      <>
        <Section title="This is my Contact Book">
          <Phonebook handleSubmit={this.handleSubmit} />
          <Contacts
            handleInputChange={this.handleInputChange}
            handleDelete={this.handleContactDelete}
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </Section>
      </>
    );
  }
}

export default ContactBook;
