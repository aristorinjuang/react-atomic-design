import { render, screen } from '@testing-library/react';
import ButtonSubmit from './ButtonSubmit';

it('should contain submit message', () => {
  render(<ButtonSubmit />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
})