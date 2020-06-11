import React, { Fragment, useState } from 'react';
import './App.css';


// Import inputTodo
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {

  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );

}

export default App;

// Overview 01:19:51
