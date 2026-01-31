import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import LoadingSpinner from '../components/page/loading/LoadingSpinner';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/LoadingSpinner',
  component: LoadingSpinner,
} satisfies Meta<typeof LoadingSpinner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingSpinnerDefault : Story = {
  args: {
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = await canvas.getByRole('img');
    await expect(spinner).toBeInTheDocument();
  }
};


export const LoadingSpinnerWithProgress : Story = {
  args: {
    progress: 40
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = await canvas.getByRole('img');
    await expect(spinner).toBeInTheDocument();
  }
};


export const LoadingSpinnerWithText : Story = {
  args: {
    progress: 40,
    text: "Loading ..."
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = await canvas.getByRole('img');
    await expect(spinner).toBeInTheDocument();
    const text = await canvas.getByText('Loading ...');
    await expect(text).toBeInTheDocument();
  }
};
