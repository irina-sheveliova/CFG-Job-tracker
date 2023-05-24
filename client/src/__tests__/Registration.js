import { render, screen } from '@testing-library/react';
import SignUpForm from '../components/Registration/Registration';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Registration component', () => {
  test('Inputs are being rendered', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('Inputs accept values', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    const user = {
      firstName: 'User',
      lastName: 'User',
      email: 'user@test.com',
      password: 'password123',
    };
    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    userEvent.type(firstNameInput, user.firstName);
    userEvent.type(lastNameInput, user.lastName);
    userEvent.type(emailInput, user.email);
    userEvent.type(passwordInput, user.password);

    expect(firstNameInput).toHaveValue(user.firstName);
    expect(lastNameInput).toHaveValue(user.lastName);
    expect(emailInput).toHaveValue(user.email);
    expect(passwordInput).toHaveValue(user.password);
    //   test('signInWithEmailAndPassword throws an error with wrong credential') async () => {

    //   }
  });
});
