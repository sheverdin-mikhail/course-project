import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args: any) => <MainPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
