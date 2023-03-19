import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewTask.module.css';

class NewTask extends React.Component {
  placeholder_title = "Title";
  placeholder_description = "Description";
  submit_form_label = "Add new task";

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className={styles.NewTask}>
        <form className={styles.NewTaskForm}>
          <div className={styles.FieldsGroup}>
            <input type="text" name="title" className={[styles.Field, styles.Title].join(' ')} placeholder={this.placeholder_title} value={this.state.title} onChange={(e) => this.handleChange(e)} />
            <textarea type="text" name="description" draggable="false" className={[styles.Field, styles.Description].join(' ')} placeholder={this.placeholder_description} value={this.state.description} onChange={(e) => this.handleChange(e)} />
          </div>
          <div className={styles.Group}>
            <button type='submit' className={styles.SubmitButton}>{this.submit_form_label}</button>
          </div>
        </form>
      </div>
    );
  }
}


NewTask.propTypes = {};

NewTask.defaultProps = {};

export default NewTask;
