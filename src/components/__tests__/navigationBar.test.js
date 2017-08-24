// Link.react-test.js
import React from 'react';
import NavigationBar from 'navigationBar.js';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

test('From display', () => {
  const component = renderer.create(
<NavigationBar />     
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Check components', () => {

  const navigationBar = shallow(
    <NavigationBar/>
  );

  expect( navigationBar ).toHaveLength(1);
});