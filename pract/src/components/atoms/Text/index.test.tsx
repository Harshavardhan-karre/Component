import React from 'react'
import Text from './index'
import { render,screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('TextComponent', () => {
     test('should test for Text presence',()=>{
        render(<Text size={20} text='Hello World'/>)

        const textcontent=screen.getByText(/Hello World/i)
        expect(textcontent).toBeInTheDocument();
     })
     test('Test for Text fontSize',()=>{
        render(<Text size={20} text='Hello World'/>)

        const textcontent=screen.getByText(/Hello World/i)
        expect(textcontent).toBeInTheDocument();
        expect(textcontent).toHaveStyle('font-size: 20px');
     })
})
