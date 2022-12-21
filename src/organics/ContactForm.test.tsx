import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

it('should have form tag', () => {
  let { container } = render(<ContactForm />);
  let form = container.querySelector('form');

  expect(form).toBeInTheDocument();
})