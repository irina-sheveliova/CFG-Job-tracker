import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '../components/Registration/Registration';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Registration component', () => {
  const renderSignUpForm = () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
  };

  const fillOutForm = (user) => {
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    userEvent.type(firstNameInput, user.firstName);
    userEvent.type(lastNameInput, user.lastName);
    userEvent.type(emailInput, user.email);
    userEvent.type(passwordInput, user.password);
  };

  test('Inputs are being rendered', () => {
    renderSignUpForm();

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('Inputs accept values', () => {
    renderSignUpForm();

    const user = {
      firstName: 'User',
      lastName: 'User',
      email: 'user@test.com',
      password: 'password123',
    };

    fillOutForm(user);

    expect(screen.getByPlaceholderText('First Name')).toHaveValue(
      user.firstName
    );
    expect(screen.getByPlaceholderText('Last Name')).toHaveValue(user.lastName);
    expect(screen.getByPlaceholderText('Email')).toHaveValue(user.email);
    expect(screen.getByPlaceholderText('Password')).toHaveValue(user.password);
  });

  test('handles error when User already in use', async () => {
    const errorMessage = 'User with this email already exists';

    renderSignUpForm();

    const user = {
      firstName: 'User',
      lastName: 'User',
      email: 'user@test.com',
      password: 'password123',
    };

    fillOutForm(user);

    fireEvent.submit(screen.getByRole('button', { name: /sign up/i }));

    const errorElement = await screen.findByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
