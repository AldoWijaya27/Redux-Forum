/*
   Pengujian skenario login input
 
  - LoginInput component
    - Menghandle penulisan email dengan benar
    - Menghandle penulisan password dengan benar
    - memanggil fungsi login saat button login ditekan
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom/extend-expect';

describe('LoginInput component', () => {
  it('Menghandle penulisan email dengan benar', async () => {
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    await act(async () => {
      await userEvent.type(emailInput, 'emailtest');
    });

    expect(emailInput).toHaveValue('emailtest');
  });

  it('Menghandle penulisan password dengan benar', async () => {
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await act(async () => {
      await userEvent.type(passwordInput, 'passwordtest');
    });

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('memanggil fungsi login saat button login ditekan', async () => {
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await act(async () => {
      await userEvent.type(emailInput, 'emailtest');
    });
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => {
      await userEvent.type(passwordInput, 'passwordtest');
    });
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await act(async () => {
      await userEvent.click(loginButton);
    });

    expect(mockLogin).toBeCalledWith({
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
