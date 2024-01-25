import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitBtn.module.css';

class SubmitBtn extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    return (
      <button className={styles.submitBtn} type="submit">
        {this.props.text}
      </button>
    );
  }
}

export default SubmitBtn;
