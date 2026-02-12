import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import ToastNotification from '../components/page/notification/ToastNotification';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/ToastNotification',
  component: ToastNotification,
} satisfies Meta<typeof ToastNotification>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ToastNotificationDefault : Story = {
  args: {
    title: "Toast notification",
    message: "Some info",
    type: "DEFAULT"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const notification = await canvas.getByText('Toast notification');
    await expect(notification).toBeInTheDocument();
    const message = await canvas.getByText('Some info');
    await expect(message).toBeInTheDocument();
  }
};

export const ToastNotificationSuccess : Story = {
  args: {
    title: "Toast notification",
    message: "Some info",
    type: "SUCCESS"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const notification = await canvas.getByText('Toast notification');
    await expect(notification).toBeInTheDocument();
    const message = await canvas.getByText('Some info');
    await expect(message).toBeInTheDocument();
  }
};
export const ToastNotificationWarning : Story = {
  args: {
    title: "Toast notification",
    message: "Some info",
    type: "WARNING"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const notification = await canvas.getByText('Toast notification');
    await expect(notification).toBeInTheDocument();
    const message = await canvas.getByText('Some info');
    await expect(message).toBeInTheDocument();
  }
};
