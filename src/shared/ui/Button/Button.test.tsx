import { render, screen } from '@testing-library/react';
import { ButtonTheme, Button } from 'shared/ui/Button/Button';

describe('Button UI tests', () => {
    test('Render testing', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText(/TEST/i)).toBeInTheDocument();
    });

    test('Button with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText(/TEST/i)).toHaveClass('clear');
    });
});
