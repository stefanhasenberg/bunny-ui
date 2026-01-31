import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import ToastNotificationWrapper from '../components/page/notification/ToastNotificationWrapper';
import ToastNotification from '../components/page/notification/ToastNotification';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/ToastNotificationWrapper',
  component: ToastNotificationWrapper,
} satisfies Meta<typeof ToastNotificationWrapper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ToastNotificationWrapperDefault : Story = {
  args: {
    children: <>
      <ToastNotification title='Toast notification' message='Some info' type='DEFAULT' />
      <ToastNotification title='Toast notification' message='Some info' type='SUCCESS' />
      <ToastNotification title='Toast notification' message='Some info' type='WARNING' />
  </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const notification = await canvas.getAllByText('Toast notification');
    await expect(notification).toHaveLength(3);
    const message = await canvas.getAllByText('Some info');
    await expect(message).toHaveLength(3);
  }
};
