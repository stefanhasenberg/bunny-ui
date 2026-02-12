import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import  Select from '../components/form/select/Select';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Select',
  component: Select,
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelectInput : Story = {
  args: {
    id: 'selectInput',
    name: 'selectInput',
    options: [{
      name: 'Option1',
      label: 'Option1',
      value: '1'
    }],
    defaultUnselected: "Keine Auswahl"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectInput = await canvas.getByRole('combobox');
    await expect(selectInput).toBeInTheDocument();
    await expect(selectInput).toHaveAttribute('id', 'selectInput');
    await expect(selectInput).toBeEnabled();
  }
};
export const DefaultSelectInputDisabled : Story = {
  args: {
    id: 'selectInputDisabled',
    name: 'selectInputDisabled',
    options: [{
      name: 'Option1',
      label: 'Option1',
      value: '1'
    }],
    defaultUnselected: "Keine Auswahl",
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectInput = await canvas.getByRole('combobox');
    await expect(selectInput).toBeInTheDocument();
    await expect(selectInput).toHaveAttribute('id', 'selectInputDisabled');
    await expect(selectInput).toBeDisabled();
  }
};
