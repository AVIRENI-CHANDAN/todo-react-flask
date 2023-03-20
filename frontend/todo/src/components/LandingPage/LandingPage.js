import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingPage.module.css';
import NewTasksPage from './../NewTask/NewTask';
import TaskList from './../TaskList/TaskList'

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage}>
        <div className={styles.TodoPageContainer}>
          <div className={styles.NewTasksPage}>
            <NewTasksPage></NewTasksPage>
          </div>
          <div className={styles.TaskListPage}>
            <TaskList></TaskList>
          </div>
          </div>
      </div>
    );
  }
}

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
