import { render } from '@testing-library/react';
import FieldSubmit from './FieldSubmit';

it('should have p tag', () => {
  let { container } = render(<FieldSubmit />);
  let field = container.querySelector('p');

  expect(field).toBeInTheDocument();
})