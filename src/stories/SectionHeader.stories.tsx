import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import { expect, within } from 'storybook/test';
import SectionHeader from "../components/page/section/SectionHeader";
import Text from '../components/page/text/Text';

const meta = {
  title: 'Bunny-UI/SectionHeader',
  component: SectionHeader,
} satisfies Meta<typeof SectionHeader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ListDefault: Story = {
  args: {
    children: <Text type={"h1"} content={"Headline"} ></Text>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('Headline');
    await expect(item1).toBeInTheDocument();
  }
};