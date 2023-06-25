import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button UI tests', () => {
    test('Render testing', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText(/TEST/i)).toBeInTheDocument();
    });

    test('Button with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText(/TEST/i)).toHaveClass('clear');
    });
});
