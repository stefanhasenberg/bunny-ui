import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import TeaserBlog from '../components/page/teaser/TeaserBlog';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/TeaserBlog',
  component: TeaserBlog,
  decorators: [(Story, context) => (
     <div style={{margin: '0 auto', maxWidth: '500px'}}>
        <Story />
      </div>
  ),]
} satisfies Meta<typeof TeaserBlog>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TeaserBlogDefault : Story = {
  args: {
    image: {
      ratio: "widescreen",
      src: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_641,c_fill,g_auto,h_361,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121333-scotland---travel-destination---shutterstock-512226913.jpg"
    },
    headline: {
      type: "h4",
      content: "Headline"
    },
    text: {
      type: "p",
      content: "Some text"
    },
    href: "#"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headline = await canvas.getByText('Headline');
    await expect(headline).toBeInTheDocument();
    const text = await canvas.getByText('Some text');
    await expect(text).toBeInTheDocument();
  }
};