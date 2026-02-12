import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import TextPlaceholder from '../components/page/placeholder/TextPlaceholder';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/TextPlaceholder',
  component: TextPlaceholder,
} satisfies Meta<typeof TextPlaceholder>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextPlaceholderDefault : Story = {
  args: {
    text: 'This is a text placeholder',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const placeholder = await canvas.getByText('This is a text placeholder');
    await expect(placeholder).toBeInTheDocument();
  }
};
