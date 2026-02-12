import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import InfoBox from '../components/page/info/InfoBox';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/InfoBox',
  component: InfoBox,
} satisfies Meta<typeof InfoBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const InfoBoxDefault : Story = {
  args: {
    text: "Some info"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const infoBox = await canvas.getByText('Some info');
    await expect(infoBox).toBeInTheDocument();
  }
};