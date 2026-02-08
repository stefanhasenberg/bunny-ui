import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import SettingsBar from '../components/page/settings/SettingsBar';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/SettingsBar',
  component: SettingsBar,
} satisfies Meta<typeof SettingsBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SettingsBarDefault : Story = {
  args: {
    settings: <><div>Some Settings</div></>,
    items: [{
      svg: {
        svgRef: 'profile'
      },
      label: 'Login',
      onClick: () => {
        console.log("click")
      }
    }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const settingsBar = await canvas.getByTestId('settings-bar-container');
    await expect(settingsBar).toBeInTheDocument();
  }
};

