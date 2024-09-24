import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { describe, expect, it, vi } from 'vitest';

describe('Button', () => {
    it('renders the button with the correct label', () => {
        render(
            <Button 
                label="Click Me" 
                onClick={() => {}}
            />
        );
        
        const buttonElement = screen.getByText(/click me/i);
        
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls the onClick function when clicked', () => {
        const handleClick = vi.fn()

        render(
            <Button 
                label="Click Me"
                onClick={handleClick} 
            />
        );
    
        const buttonElement = screen.getByText(/click me/i);
    
        fireEvent.click(buttonElement);
    
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
