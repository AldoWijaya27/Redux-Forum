import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Full Name');

    // Action
    await act(async () => {
      await userEvent.type(nameInput, 'nametest');
    });

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await act(async () => {
      await userEvent.type(emailInput, 'emailtest');
    });

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await act(async () => {
      await userEvent.type(passwordInput, 'passwordtest');
    });

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Full Name');
    const emailInput = await screen.getByPlaceholderText('Email');
    const passwordInput = await screen.getByPlaceholderText('Password');
    const registerButton = await screen.getByRole('button', {
      name: 'Registration',
    });

    // Action
    await act(async () => {
      await userEvent.type(nameInput, 'nametest');
      await userEvent.type(emailInput, 'emailtest');
      await userEvent.type(passwordInput, 'passwordtest');
      await userEvent.click(registerButton);
    });

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
