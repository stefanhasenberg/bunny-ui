import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import Checkbox from '../components/form/checkbox/Checkbox';
import { expect, within } from 'storybook/test';


const meta = {
  title: 'Bunny-UI/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCheckbox : Story = {
  args: {
    id: 'defaultCheckbox',
    name: 'defaultCheckbox',
    label: "Checkbox 1"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole('checkbox', { name: 'Checkbox 1' });
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveAttribute('id', 'defaultCheckbox');
    await expect(checkbox).toHaveAttribute('name', 'defaultCheckbox');
    await expect(checkbox).toBeEnabled();
    await expect(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked();
  }
};

export const DefaultCheckboxRequired : Story = {
  args: {
    id: 'defaultCheckboxRequired',
    name: 'defaultCheckboxRequired',
    label: "Checkbox Required",
    checkRequired: true,
    requiredMessage: "Please check this checkbox."
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.getByRole('checkbox', { name: 'Checkbox Required' });
    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).toHaveAttribute('id', 'defaultCheckboxRequired');
    await expect(checkbox).toHaveAttribute('name', 'defaultCheckboxRequired');
    await expect(checkbox).toBeEnabled();
    await expect(checkbox).not.toBeChecked();
    const errorMessage = await canvas.getByText('Please check this checkbox.');
    await expect(errorMessage).toBeInTheDocument();
    await checkbox.click();
    await expect(checkbox).toBeChecked();
    await expect(errorMessage).not.toBeInTheDocument();
  }
};