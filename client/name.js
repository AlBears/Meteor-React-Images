import React from 'react';
import ReactDom from 'react-dom';
import ImageList from './components/image_list';

const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};
Meteor.startup(() => {
ReactDom.render(<App/>, document.querySelector('.container'));
});
