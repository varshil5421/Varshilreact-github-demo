import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('MainContent', () => {
  it('should render a button', () => {
    render(<App />);

    expect(screen.getByText('Hello Varshil')).toBeInTheDocument();
  });

});
