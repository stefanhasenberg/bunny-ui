import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import TextArea from '../components/form/textarea/TextArea';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTextArea : Story = {
  args: {
    id: 'textArea',
    name: 'textArea',
    placeholder: 'Text Area',
    borders: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = await canvas.getByPlaceholderText('Text Area');
    await expect(textArea).toBeInTheDocument();
    await expect(textArea).toHaveAttribute('id', 'textArea');
    await expect(textArea).toHaveAttribute('name', 'textArea');
    await expect(textArea).toBeEnabled();
  }
};

export const DefaultTextAreaDisbaled : Story = {
  args: {
    id: 'textAreaDisabled',
    name: 'textAreaDisabled',
    placeholder: 'Text Area Disabled',
    borders: true,
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = await canvas.getByPlaceholderText('Text Area Disabled');
    await expect(textArea).toBeInTheDocument();
    await expect(textArea).toHaveAttribute('id', 'textAreaDisabled');
    await expect(textArea).toHaveAttribute('name', 'textAreaDisabled');
    await expect(textArea).toBeDisabled();
  }
};

export const DefaultTextAreaRequired : Story = {
  args: {
    id: 'textAreaRequired',
    name: 'textAreaRequired',
    placeholder: 'Text Area Required',
    borders: true,
    validationRules: [{
      ruleName: 'required',
      errorMessage: 'Field may not be empty.'
    }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = await canvas.getByPlaceholderText('Text Area Required');
    await expect(textArea).toBeInTheDocument();
    await expect(textArea).toHaveAttribute('id', 'textAreaRequired');
    await expect(textArea).toHaveAttribute('name', 'textAreaRequired');
    await expect(textArea).toBeEnabled();
  }
};