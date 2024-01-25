import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <section className={styles['contact-section']}>
        <h1 className={styles['section-title']}>{this.props.title}</h1>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
