// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import VenueCard from './VenueCard';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Organisms/VenueCard',
  component: VenueCard,
  decorators: [withDesign],
} as ComponentMeta<typeof VenueCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof VenueCard> = (args) => <VenueCard {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5OKuBHAVTnNvJYr6QbQlu6/LiveNow?node-id=117%3A3',
  },
};

Default.args = {
  title: 'VenueCard',
};

export const Create = Template.bind({});

Create.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5OKuBHAVTnNvJYr6QbQlu6/LiveNow?node-id=117%3A3',
  },
};

Create.args = {
  title: 'Create',
};

export const Delete = Template.bind({});

Delete.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5OKuBHAVTnNvJYr6QbQlu6/LiveNow?node-id=117%3A3',
  },
};

Delete.args = {
  title: 'Delete',
};
