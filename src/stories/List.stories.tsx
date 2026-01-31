import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import List from '../components/page/list/List';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/List',
  component: List,
} satisfies Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ListDefault: Story = {
  args: {
    items: [{
      svg: {
        svgRef: 'profile'
      },
      text: "List Item 1",
      border: true
    },{
      svg: {
        svgRef: 'profile'
      },
      text: "List Item 2",
      border: true
    },{
      svg: {
        svgRef: 'profile'
      },
      text: "List Item 3 with Link",
      link: {
        href: '#',
        title: 'Linked Item'
      },
      border: true
    }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('List Item 1');
    const item2 = await canvas.getByText('List Item 2');
    const item3 = await canvas.getByText('List Item 3 with Link');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};

export const ListAlternativeColourNoBorder: Story = {
  args: {
    colorRef: {
      default: 'secondary',
      hover: 'secondary-light'
    },
    items: [{
      svg: {
        svgRef: 'profile'
      },
      text: "List Item 1",
      border: true
    },{
      svg: {
        svgRef: 'profile'
      },
      text: "List Item 2",
      border: true
    },{
      svg: {
        svgRef: 'profile'
      },
      text: "List Item 3 with Link",
      link: {
        href: '#',
        title: 'Linked Item'
      },
      border: false
    }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('List Item 1');
    const item2 = await canvas.getByText('List Item 2');
    const item3 = await canvas.getByText('List Item 3 with Link');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};
