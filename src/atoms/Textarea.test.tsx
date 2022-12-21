import { render, screen } from '@testing-library/react';
import Textarea from './Textarea';

it('should contain message placeholder', () => {
  render(<Textarea />);

  const textarea = screen.getByPlaceholderText("Message...")

  expect(textarea).toBeInTheDocument();
})