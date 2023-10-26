import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        clearable: false,
        list: [
            {
                name: 'light', class: 'light', color: '#e2e6f1', default: true,
            },
            { name: 'dark', class: 'dark', color: '#020613' },
        ],
        // target: '#app',
        Decorator: ThemeDecorator,
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
