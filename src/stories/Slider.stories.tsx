import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import { expect, within } from 'storybook/test';
import Text from '../components/page/text/Text';
import {Slider, TeaserBlog, Tile} from "../components";

const meta = {
  title: 'Bunny-UI/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SliderDefault: Story = {
  args: {
    children: [
      <TeaserBlog headline={{type: "h3", content: "Content 1"}} />,
      <TeaserBlog headline={{type: "h3", content: "Content 2"}} />,
      <TeaserBlog headline={{type: "h3", content: "Content 3"}} />,
      <TeaserBlog headline={{type: "h3", content: "Content 4"}} />,
      <TeaserBlog headline={{type: "h3", content: "Content 5"}} />,
      <TeaserBlog headline={{type: "h3", content: "Content 6"}} />,
      <TeaserBlog headline={{type: "h3", content: "Content 7"}} />
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('Content 1');
    const item2 = await canvas.getByText('Content 2');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
  }
};