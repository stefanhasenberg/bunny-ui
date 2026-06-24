import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { expect, within, fn } from 'storybook/test';
import Article from "../components/page/article/Article";

const meta = {
  title: 'Bunny-UI/Article',
  component: Article,
} satisfies Meta<typeof Article>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleSection: Story = {
  args: {
    children: <>
      <h1>Headline H1</h1>
      <h2>Headline H2</h2>
      <h3>Headline H3</h3>
      <h4>Headline H4</h4>
      <h5>Headline H5</h5>
      <h6>Headline H6</h6>
      <p>Text</p>
      </>,
    textMargin: "medium"
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Text")).toBeVisible();
  }
};