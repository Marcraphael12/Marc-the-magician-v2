import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';
import Header from '../header';

describe('Header page of the App', () => {
  test('Builds the snapchot of the Header component safely', () => {
    const rend = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  })
});