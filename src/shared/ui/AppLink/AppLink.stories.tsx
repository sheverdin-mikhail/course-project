import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args: any) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
};

export const PrimaryActive = Template.bind({});
PrimaryActive.args = {
    theme: AppLinkTheme.PRIMARY,
    active: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
};
export const SecondaryActive = Template.bind({});
SecondaryActive.args = {
    theme: AppLinkTheme.SECONDARY,
    active: true,
};
