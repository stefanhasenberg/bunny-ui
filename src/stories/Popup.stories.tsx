import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import Popup from '../components/page/popup/Popup';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Popup',
  component: Popup,
} satisfies Meta<typeof Popup>;
export default meta;

type Story = StoryObj<typeof meta>;


export const PopupDefault : Story = {
  args: {
    isOpen: true,
    children: <p>Some Text</p>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const popup = await canvas.getByTestId('popup-container');
    await expect(popup).toBeInTheDocument();
    const text = await canvas.getByText('Some Text');
    await expect(text).toBeInTheDocument();
  }
};