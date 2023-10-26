import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: any) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
