import { render, screen } from '@testing-library/react';
import Contact from './Contact';

it('should have content', () => {
  render(<Contact />);

  const page = screen.getByText("Contact");

  expect(page).toBeInTheDocument();
})