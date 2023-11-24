/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// LoginForm.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

describe('LoginForm Component', () => {
  it('submits the form with user credentials', () => {
    const mockSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <LoginForm onSubmit={mockSubmit} />
    );

    // *Simula la entrada de datos del usuario
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(getByLabelText(/password/i), {
      target: { value: 'password123' },
    });

    // *Simula el envío del formulario
    fireEvent.click(getByText(/login/i));

    // *Verifica que la función onSubmit se haya llamado con las credenciales proporcionadas
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
    
    screen.debug();
  });
});
