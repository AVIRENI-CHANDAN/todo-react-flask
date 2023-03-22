import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskCard.module.css';

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      description: props.description,
      completed: props.completed
    };
  }

  onSubmitCompleted(event) {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/task/' + this.state.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: true
      })
    });
    this.setState({ completed: true });
  }

  onSubmitNotCompleted(event) {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/task/' + this.state.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: false
      })
    });
    this.setState({ completed: false });
  }

  onSubmitDelete(event) {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/task/' + this.state.id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState({ title: "", description: "", completed: false });
  }

  render() {
    return (
      <div className={styles.TaskCard}>
        <div className={styles.TaskFieldsGroup}>
          <div className={[styles.TaskTitle, styles.TaskField].join(' ')}>{this.state.title}</div>
          <div className={[styles.TaskStatus, (this.state.completed ? styles.TaskComplete : styles.TaskInComplete)].join(' ')}></div>
        </div>
        <div className={styles.TaskField}>
          {/* TODO: Smoothen the animation of text show */}
          <div className={styles.TaskDescription}>
            {this.state.description}
          </div>
        </div>
        <div className={styles.TaskButtons}>
          <div className={styles.TaskButtonsContainer}>
            <button className={[styles.Btn, styles.PrimaryBtn].join(' ')} onClick={(e) => (this.state.completed) ? this.onSubmitNotCompleted(e) : this.onSubmitCompleted(e)}>{this.state.completed ? "NotCompleted" : "Completed"}</button>
            <button className={[styles.Btn, styles.DangerBtn].join(' ')} onClick={(e) => this.onSubmitDelete(e)}>Delete</button>
            <button className={[styles.Btn, styles.Warnbtn].join(' ')}>Update</button>
          </div>
        </div>
      </div>
    );
  }
}

TaskCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool || PropTypes.null
};

TaskCard.defaultProps = {};

export default TaskCard;
