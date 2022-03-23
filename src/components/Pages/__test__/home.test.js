import Home from '../home';
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';


describe('Home page of the App', () => {
  test('Builds the snapchot of the Home component safely', () => {
    const rend = renderer.create(<Home />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Home component', () => {
    render(<Home />);
  })
});
