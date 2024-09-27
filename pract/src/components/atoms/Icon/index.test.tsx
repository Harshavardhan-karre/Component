import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './index'; 
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

describe('IconComponent', () => {
  test('should test for appearance of Icon', () => {
    
    render(<Icon icon={<InfoOutlinedIcon />} color="inherit" fontSize="medium" />);

    const icon = screen.getByTestId('InfoOutlinedIcon'); 

    expect(icon).toBeInTheDocument();
  });
});
