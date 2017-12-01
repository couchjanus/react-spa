import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import TodoApp from './Todo1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

// setInterval(tick, 1000);

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const element = <Welcome name="Sara" />;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

// ReactDOM.render(<TodoApp />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

