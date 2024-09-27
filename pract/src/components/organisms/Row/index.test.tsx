import React from 'react';
import RowTab from './index';
import { render, screen } from '@testing-library/react';
import { ContractTableInfo } from '../../../utils/constants';
describe('RowTabComponent', () => {
    test('should render the component with correct number of rows', () => {
        render(<RowTab />);
        const styledBox = screen.getByTestId('styled-box'); 
        expect(styledBox).toBeInTheDocument();
        
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(ContractTableInfo.length);
      });
})
