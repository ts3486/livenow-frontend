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
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5OKuBHAVTnNvJYr6QbQlu6/LiveNow?node-id=116%3A10',
  },
};

Default.args = {
  title: 'Button',
  onClick: () => {
    alert('button clicked');
  },
};

Default.decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];

export const Create = Template.bind({});

Create.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5OKuBHAVTnNvJYr6QbQlu6/LiveNow?node-id=113%3A121',
  },
};

Create.args = {
  title: 'Create',
  onClick: () => {
    alert('button clicked');
  },
};

export const Delete = Template.bind({});

Delete.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5OKuBHAVTnNvJYr6QbQlu6/LiveNow?node-id=113%3A121',
  },
};

Delete.args = {
  title: 'Delete',
  onClick: () => {
    alert('button clicked');
  },
};
