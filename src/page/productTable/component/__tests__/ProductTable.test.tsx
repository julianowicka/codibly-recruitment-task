import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductTable } from '../ProductTable';
import { ProductModel } from '../../model/ProductModel';

const mockProducts: ProductModel[] = [
  {
    id: 1,
    name: 'cerulean',
    year: 2000,
    color: '#98B2D1',
    pantone_value: '15-4020'
  },
  {
    id: 2,
    name: 'fuchsia rose',
    year: 2001,
    color: '#C74375',
    pantone_value: '17-2031'
  }
];

describe('ProductTable', () => {
  it('renders table with product data', () => {
    render(<ProductTable products={mockProducts} />);
    
    // Check table headers
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    
    // Check product data
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('cerulean')).toBeInTheDocument();
    expect(screen.getByText('2000')).toBeInTheDocument();
    
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('fuchsia rose')).toBeInTheDocument();
    expect(screen.getByText('2001')).toBeInTheDocument();
  });

  it('renders empty table when no products provided', () => {
    render(<ProductTable products={[]} />);
    
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    
    // No product rows should be present
    expect(screen.queryByText('cerulean')).not.toBeInTheDocument();
  });
});