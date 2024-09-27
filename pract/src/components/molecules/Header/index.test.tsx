import React from 'react';
import Header from './index';
import { render, screen } from '@testing-library/react';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Icon from '../../atoms/Icon/index'
describe('HeaderComponent', () => {
  test('should test for Icon and Text Presence', async () => {
    render(<Header size={20} text='Your Contracts' />);

    const textcontent = await screen.findByText(/Your Contracts/i);
    expect(textcontent).toBeInTheDocument();

    const iconButton = screen.getByTestId('InfoOutlinedIcon');
    expect(iconButton).toBeInTheDocument();
  });
});
