import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import FileInput from '../components/form/fileinput/FileInput';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/FileInput',
  component: FileInput,
} satisfies Meta<typeof FileInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFileInput: Story = {
  args: {
    id: 'fileInput',
    name: 'fileInput',
    placeholder: 'File Input',
    borders: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const fileInput = await canvas.getByPlaceholderText('File Input');
    await expect(fileInput).toBeInTheDocument();
    await expect(fileInput).toHaveAttribute('id', 'fileInput');
    await expect(fileInput).toHaveAttribute('name', 'fileInput');
    await expect(fileInput).toBeEnabled();
  }
};