// Link.react-test.js
import React from 'react';
import NavigationBar from 'navigationBar.js';
import renderer from 'react-test-renderer';

test('From display', () => {
  const component = renderer.create(
<NavigationBar />     
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
   tree = component.toJSON();
   expect(tree).toMatchSnapshot();
});