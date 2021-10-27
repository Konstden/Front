import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyComponent(props) {
  return <h1>Привет, {props.name}</h1>;  
}

function AppNew(props) {
  return (
    <div>
      <MyComponent name="konstantin"/>
      <MyComponent name="Danil"/>
      <MyComponent name="Ibragim"/>
    </div>
  );
}

ReactDOM.render(
  <AppNew />, 
  document.querySelector('#root')
);

function Comment(props) {
  return (
    <div className="comment">
      <div className="UserInfo"></div>
    </div>
  )
}