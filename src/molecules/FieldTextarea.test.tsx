import { render } from '@testing-library/react';
import FieldTextarea from './FieldTextarea';

it('should have p tag', () => {
  let { container } = render(<FieldTextarea />);
  let field = container.querySelector('p');

  expect(field).toBeInTheDocument();
})