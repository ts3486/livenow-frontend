// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import Button from './Button';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Button',
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6cLpgJCLxfkINbP6kt1Yz5/Storybook_test?node-id=0%3A1',
  },
};

Default.args = {
  id: '1',
  title: 'Button',
  function: () => {
    alert('button clicked');
  },
};

export const Create = Template.bind({});

Create.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6cLpgJCLxfkINbP6kt1Yz5/Storybook_test?node-id=0%3A1',
  },
};

Create.args = {
  id: '2',
  title: 'Create',
  function: () => {
    alert('button clicked');
  },
};

export const Delete = Template.bind({});

Delete.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6cLpgJCLxfkINbP6kt1Yz5/Storybook_test?node-id=0%3A1',
  },
};

Delete.args = {
  id: '3',
  title: 'Delete',
  function: () => {
    alert('button clicked');
  },
};
