import { render, screen } from '@testing-library/react';
import Contact from './Contact';

it('should have content', () => {
  render(<Contact content="This is the content." />);

  const template = screen.getByText("This is the content.");

  expect(template).toBeInTheDocument();
})