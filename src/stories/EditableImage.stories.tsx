import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import EditableImage from '../components/images/image/EditableImage';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/EditableImage',
  component: EditableImage,
} satisfies Meta<typeof EditableImage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EditableImageDefault : Story = {
  args: {
    name: 'editableImage',
    ratio: "square",
    alt: "square image",
    src: "https://wallpapercave.com/wp/wp4196153.jpg",
    save: (file?: File) => {console.log(file)},
    editable: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const img = await canvas.getByRole('img', { name: 'square image' });
    await expect(img).toBeInTheDocument();
    await expect(img).toHaveAttribute('src', 'https://wallpapercave.com/wp/wp4196153.jpg');
  }
};

export const EditableImageDefaultWidescreen : Story = {
  args: {
    name: 'editableImage',
    ratio: "widescreen",
    alt: "widescreen image",
    src: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_641,c_fill,g_auto,h_361,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121333-scotland---travel-destination---shutterstock-512226913.jpg",
    save: (file?: File) => {console.log(file)},
    editable: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const img = await canvas.getByRole('img', { name: 'widescreen image' });
    await expect(img).toBeInTheDocument();
    await expect(img).toHaveAttribute('src', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_641,c_fill,g_auto,h_361,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121333-scotland---travel-destination---shutterstock-512226913.jpg');
  }
};