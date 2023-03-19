import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingPage.module.css';
import NewTasksPage from './../NewTask/NewTask';

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage}>
        <div className={styles.TodoPageContainer}>
          <NewTasksPage></NewTasksPage>
          </div>
      </div>
    );
  }
}

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
