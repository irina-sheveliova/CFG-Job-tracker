import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Login from '../components/Login/Login';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { auth } from '../firebase';

jest.mock('../firebase', () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
  },
}));

describe('Login component', () => {
  const renderLoginComponent = () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  };

  test('accepts user input', () => {
    renderLoginComponent();
    const user = {
      email: 'example@test.com',
      password: 'password123',
    };

    userEvent.type(screen.getByPlaceholderText('Email'), user.email);
    userEvent.type(screen.getByPlaceholderText('Password'), user.password);

    expect(screen.getByPlaceholderText('Email')).toHaveValue(user.email);
    expect(screen.getByPlaceholderText('Password')).toHaveValue(user.password);
  });

  test('logs in successfully', async () => {
    renderLoginComponent();

    const user = {
      email: 'example@test.com',
      password: 'password123',
    };

    auth.signInWithEmailAndPassword.mockResolvedValueOnce({
      user,
    });

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('Continue');

    userEvent.type(emailInput, user.email);
    userEvent.type(passwordInput, user.password);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(
        user.email,
        user.password
      );
    });

    expect(auth.signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
