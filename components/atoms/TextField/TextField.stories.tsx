//TextField.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import TextField from './TextField';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/TextField',
  component: TextField,
  argTypes: {
    onClick: { action: true },
  },
} as ComponentMeta<typeof TextField>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Email:',
};

export const WithInput = Template.bind({});

WithInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('textbox'));
  await userEvent.keyboard('test test');
  await expect(canvas.getByRole('textbox')).toHaveValue('test test');
};
