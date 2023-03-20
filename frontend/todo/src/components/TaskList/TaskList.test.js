import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskList />, div);
  ReactDOM.unmountComponentAtNode(div);
});