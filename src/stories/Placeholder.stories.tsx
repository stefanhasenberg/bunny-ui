import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import Placeholder from '../components/page/placeholder/Placeholder';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Placeholder',
  component: Placeholder,
} satisfies Meta<typeof Placeholder>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PlaceholderDefaultNoContent : Story = {
  args: {
    ratio: 'widescreen'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const placeholder = await canvas.getByTestId('placeholder-widescreen');
    await expect(placeholder).toBeInTheDocument();
  }
};

export const PlaceholderDefaultNoContentSquare : Story = {
  args: {
    ratio: 'square'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const placeholder = await canvas.getByTestId('placeholder-square');
    await expect(placeholder).toBeInTheDocument();
  }
};

export const PlaceholderDefaultNoContentRoundedBorders : Story = {
  args: {
    ratio: 'widescreen',
    roundedBorder: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const placeholder = await canvas.getByTestId('placeholder-widescreen');
    await expect(placeholder).toBeInTheDocument();
  }
};

export const PlaceholderDefaultContent : Story = {
  args: {
    ratio: 'widescreen',
    children: 'Some content'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const placeholder = await canvas.getByTestId('placeholder-widescreen');
    await expect(placeholder).toBeInTheDocument();
    const content = await canvas.getByText('Some content');
    await expect(content).toBeInTheDocument();
  }
};