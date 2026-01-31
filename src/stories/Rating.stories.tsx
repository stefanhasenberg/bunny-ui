import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import Rating from '../components/page/rating/Rating';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Rating',
  component: Rating,
} satisfies Meta<typeof Rating>;
export default meta;

type Story = StoryObj<typeof meta>;

export const RatingDefault : Story = {
  args: {
    name: "Rating item"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = await canvas.getByTestId('rating-container');
    await expect(rating).toBeInTheDocument();
  }
};
export const RatingWithPercentage : Story = {
  args: {
    name: "Rating item",
    percentage: 40
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = await canvas.getByTestId('rating-container');
    await expect(rating).toBeInTheDocument();
  }
};
export const RatingWithPercentageDeletable : Story = {
  args: {
    name: "Rating item",
    percentage: 40,
    editable: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rating = await canvas.getByTestId('rating-container');
    await expect(rating).toBeInTheDocument();
  }
};
