import { render } from '@testing-library/react';
import FieldEmail from './FieldEmail';

it('should have p tag', () => {
  let { container } = render(<FieldEmail />);
  let field = container.querySelector('p');

  expect(field).toBeInTheDocument();
})