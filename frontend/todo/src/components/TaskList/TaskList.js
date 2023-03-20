import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.module.css';
import TaskCard from './../TaskCard/TaskCard';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.SAMPLE_TITLE = "Title";
    this.SAMPLE_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed justo vel lacus commodo
    suscipit sed vel nulla. Aliquam lacinia nisi non augue laoreet, eu molestie sapien hendrerit.
    Vestibulum at ligula nec sapien molestie imperdiet. Suspendisse sit amet congue nisi.
    Sed ultricies ante eget mauris interdum fringilla. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Sed dapibus mi id lectus tempor, a
    bibendum elit consequat. Vivamus dapibus tristique nunc, eget volutpat lorem pharetra sit amet.
    Duis eu sagittis leo, non commodo velit. Mauris eget erat blandit, mollis neque vel, varius
    tellus. Etiam ornare lobortis sapien, ac accumsan urna. Donec id nisl odio. Aliquam erat
    volutpat.`;
    this.tasks = {};
  }

  render() {
    // fetch('http://127.0.0.1:5000/task')
    //   .then(response => response.json())
    //   .then(data => {
    //     data.forEach((e) => this.tasks.append(e));
    //   }).then(console.log(this.tasks));

    return (
      <div className={styles.TaskList}>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
        <TaskCard title={this.SAMPLE_TITLE} description={this.SAMPLE_DESCRIPTION}></TaskCard>
      </div>
    );
  }
}

TaskList.propTypes = {};

TaskList.defaultProps = {};

export default TaskList;
