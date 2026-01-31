import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import Tile from '../components/page/tile/Tile';
import Text from '../components/page/text/Text';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Tile',
  component: Tile,
} satisfies Meta<typeof Tile>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TileDefault : Story = {
  args: {
    head: <Text type='h4' content="Headline" />,
    content: <Text type='p' content="Some text" />,
    info: <>
      <Text type='small' content="2023/01/01" />
      -
      <Text type='small' content="2023/02/01" />
    </>,
    editable: true,
    padding: "small"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headline = await canvas.getByText('Headline');
    await expect(headline).toBeInTheDocument();
    const infoStart = await canvas.getByText('2023/01/01');
    await expect(infoStart).toBeInTheDocument();
    const infoEnd = await canvas.getByText('2023/02/01');
    await expect(infoEnd).toBeInTheDocument();
  }
};