import { render, screen } from '@testing-library/react';
import App from './App';

it('should have contact page', () => {
  render(<App />);

  const page = screen.getByText("Contact");

  expect(page).toBeInTheDocument();
});
