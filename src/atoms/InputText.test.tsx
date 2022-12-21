import { render, screen } from '@testing-library/react';
import InputText from './InputText';

it('should contain email placeholder', () => {
  render(<InputText placeholder="Name..." />);

  const input = screen.getByPlaceholderText("Name...")

  expect(input).toBeInTheDocument();
})