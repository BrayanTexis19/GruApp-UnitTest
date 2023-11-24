/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardLink from '../components/CardLink';
import '@testing-library/jest-dom';

describe('CardLink Component', () => {
  const mockElement = {
    title: 'Test Element',
    icon: "UserIcon",
    description: 'Descripción de prueba',
    path: '/ruta-de-prueba',
  };

  it('renders CardLink component', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CardLink element={mockElement} />
      </MemoryRouter>
    );

    expect(getByText('Test Element')).toBeInTheDocument();
    expect(getByText('Descripción de prueba')).toBeInTheDocument();
    screen.debug();
  });

  it('navigates on button click', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CardLink element={mockElement} />
      </MemoryRouter>
    );

    fireEvent.click(getByText('Ir a Test Element'));
  });
});
