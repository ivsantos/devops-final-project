import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

jest.mock('react-confetti', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Confetti</div>;
    },
  };
});

describe('App', () => {
  const mockConsoleError = jest.fn();
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(mockConsoleError);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    render(<App />);

    expect(screen.getByText(/Hello/)).toBeInTheDocument();
    expect(screen.getByText('Confetti')).toBeInTheDocument();
  });

  it('should throw an error on loading deliberately broken component', async () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /Break the app/ });

    try {
      await userEvent.click(button);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
