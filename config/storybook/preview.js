import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
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
                name: 'light', class: ['app', 'light'], color: '#e2e6f1', default: true,
            },
            { name: 'dark', class: ['app', 'dark'], color: '#020613' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
