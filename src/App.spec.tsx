import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-confetti', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Confetti</div>;
    },
  };
});

describe('App', () => {
  it('should work as expected', () => {
    render(<App />);

    expect(screen.getByText(/Hello/)).toBeInTheDocument();
    expect(screen.getByText('Confetti')).toBeInTheDocument();
  });
});
