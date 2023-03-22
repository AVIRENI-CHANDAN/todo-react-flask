import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.module.css';
import TaskCard from './../TaskCard/TaskCard';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/task")
      .then((response) => response.json())
      .then((data) => { this.setState({ tasks: data, DataisLoaded: true }); });
  }

  render() {
    const { DataisLoaded, tasks } = this.state;
    if (!DataisLoaded) return <div><h3> Loading....</h3></div>;
    return (
      <div className={styles.TaskList}>
        {
          this.state.tasks.map(
            (task) => <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} completed={task.completed} />
          )
        }
      </div>
    );
  }
}

TaskList.propTypes = {};

TaskList.defaultProps = {};

export default TaskList;
