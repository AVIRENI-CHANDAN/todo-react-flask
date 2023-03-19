import React from 'react';
import ReactDOM from 'react-dom';
import NewTask from './NewTask';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});