import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskCard.module.css';

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
      completed: props.completed
    };
  }

  render() {
    return (
      <div className={styles.TaskCard}>
        <div className={styles.TaskFieldsGroup}>
          <div className={[styles.TaskTitle, styles.TaskField].join(' ')}>{this.state.title}</div>
          <div className={[styles.TaskStatus, styles.TaskComplete].join(' ')}></div>
        </div>
        <div className={styles.TaskField}>
          {/* TODO: Smoothen the animation of text show */}
          <div className={styles.TaskDescription}>
            {this.state.description}
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
