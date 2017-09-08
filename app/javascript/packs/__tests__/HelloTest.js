import React from 'react';
import Hello from '../Hello'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

test('hello component', () => {
  // Render a hello with label in the document
  const hello = shallow(
    <Hello name="brendan" date="10 August 2000" />
  );

  expect(hello.text()).toEqual('Hello brendan at 10 August 2000!');
});
