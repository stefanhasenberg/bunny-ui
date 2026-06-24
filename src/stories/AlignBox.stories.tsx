import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { expect, within, fn } from 'storybook/test';
import AlignBox from "../components/page/box/AlignBox";

const meta = {
  title: 'Bunny-UI/AlignBox',
  component: AlignBox,
} satisfies Meta<typeof AlignBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AlignBoxDefault: Story = {
  args: {
    children: <>
      <p>Text</p>
      <p>Text2</p>
      <p>Text3</p>
      </>
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Text")).toBeVisible();
    await expect(canvas.getByText("Text2")).toBeVisible();
    await expect(canvas.getByText("Text3")).toBeVisible();
  }
};

export const AlignBoxCenter: Story = {
  args: {
    children: <>
      <p>Text</p>
      <p>Text2</p>
    </>,
    align: "center"
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Text")).toBeVisible();
    await expect(canvas.getByText("Text2")).toBeVisible();
  }
};

export const AlignBoxRight: Story = {
  args: {
    children: <>
      <p>Text</p>
    </>,
    align: "right"
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Text")).toBeVisible();
  }
};