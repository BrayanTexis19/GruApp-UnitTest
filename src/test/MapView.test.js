/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import MapViewFolio from '../components/MapViewFolio';
import '@testing-library/jest-dom';

// Mock data for testing
const mockData = {
  latitud: 37.7749,
  longitud: -122.4194,
};

test('renders MapViewFolio component', () => {
  const { getByText } = render(<MapViewFolio {...mockData} />);

  // Customize the assertions based on your component's content
  expect(getByText('OpenStreetMap')).toBeInTheDocument();
});