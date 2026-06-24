import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { expect, within, fn } from 'storybook/test';
import Footer from "../components/page/footer/Footer";
import Text from "../components/page/text/Text";

const meta = {
  title: 'Bunny-UI/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FooterSection: Story = {
  args: {
    children: <>
      <Text type={"h1"} content={"Headline H1"} mode={"inverted"} />
      <Text type={"h2"} content={"Headline H2"} mode={"inverted"} />
      <Text type={"h3"} content={"Headline H3"} mode={"inverted"} />
      <Text type={"h4"} content={"Headline H4"} mode={"inverted"} />
      <Text type={"h5"} content={"Headline H5"} mode={"inverted"} />
      <Text type={"h6"} content={"Headline H6"} mode={"inverted"} />
      <Text type={"p"} content={"Text"} mode={"inverted"} />
      </>
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Text")).toBeVisible();
  }
};