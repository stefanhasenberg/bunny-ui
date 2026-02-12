import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import Navigation from '../components/page/navigation/Navigation';
import { NavigationItemProps } from '../components/page/navigation/NavigationItem.types';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;
export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationDefault : Story = {
  args: {
    show: false,
    items: [
      {
        name: "item1",
        href: "#",
        text: "Item 1"
      },
      {
        name: "item2",
        href: "#",
        text: "Item 2"
      },
      {
        name: "item3",
        href: "#",
        text: "Item 3"
      }
    ] as Array<NavigationItemProps>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nav = await canvas.getByRole('navigation');
    await expect(nav).toBeInTheDocument();
    const item1 = await canvas.getByText('Item 1');
    const item2 = await canvas.getByText('Item 2');
    const item3 = await canvas.getByText('Item 3');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};