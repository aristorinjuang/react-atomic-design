import { render, screen } from '@testing-library/react';
import InputEmail from './InputEmail';

it('should contain email placeholder', () => {
  render(<InputEmail />);

  const input = screen.getByPlaceholderText("Email...")

  expect(input).toBeInTheDocument();
})