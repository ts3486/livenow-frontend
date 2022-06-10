// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import CreateButton from './CreateButton';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/CreateButton',
  component: CreateButton,
  decorators: [withDesign],
} as ComponentMeta<typeof CreateButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CreateButton> = (args) => <CreateButton {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6cLpgJCLxfkINbP6kt1Yz5/Storybook_test?node-id=0%3A1',
  },
};

Default.args = {
  id: '1',
};
