import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};
Meteor.startup(() => {
ReactDom.render(<App/>, document.querySelector('.container'));
});
