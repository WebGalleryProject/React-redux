import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  const style = {
    fontSize: '24px'
  }
  return (
    <div className="app-header d-flex">
      <h1 style={style}>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
