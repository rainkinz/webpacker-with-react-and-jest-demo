import React from 'react';
import Hello from '../Hello'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('hello component', () => {
  // Render a hello with label in the document
  const hello = shallow(
    <Hello name="brendan" time="2000 Aug 10" />
  );

  expect(hello.text()).toEqual('Hello brendan!');
});
