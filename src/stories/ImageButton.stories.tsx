import * as React from 'react';

import {  Meta, StoryObj } from '@storybook/react-vite';


import ImageButton from '../components/form/button/ImageButton';
import { SvgProps } from '../components/images/svg/Svg.types';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/ImageButton',
  component: ImageButton,
} satisfies Meta<typeof ImageButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultImageButton : Story = {
  args: {
    id: 'defaultImageButton',
    name: 'defaultImageButton',
    onClick: () => {},
    svg: { svgRef: 'menu'} as SvgProps
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('id', 'defaultImageButton');
    await expect(button).toHaveAttribute('name', 'defaultImageButton');
    await expect(button).toBeEnabled();
  }
};
