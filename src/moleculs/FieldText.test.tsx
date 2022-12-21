import { render } from '@testing-library/react';
import FieldText from './FieldText';

it('should have p tag', () => {
  let { container } = render(<FieldText />);
  let field = container.querySelector('p');

  expect(field).toBeInTheDocument();
})