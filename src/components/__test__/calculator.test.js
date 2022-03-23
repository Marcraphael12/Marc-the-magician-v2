import Calculator from '../calculator';

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';


describe('Calculator page of the App', () => {
  test('Builds the snapchot of the Calculator component safely', () => {
    const rend = renderer.create(<Calculator />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Calculator component', () => {
    render(<Calculator />);
  })
});