import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';


import Button from '../components/form/button/Button';

import { expect, within, fn } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Button',
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    id: 'primaryButton',
    name: 'primaryButton',
    buttonType: 'primary',
    onClick: fn(),
    children: "Primary"
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: 'Primary' });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('id', 'primaryButton');
    await expect(button).toHaveAttribute('name', 'primaryButton');
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
};

export const ButtonPrimaryDisabled: Story = {
  args: {
    id: 'primaryDiabledButton',
    name: 'primaryDiabledButton',
    buttonType: 'primary',
    disabled: true,
    onClick: fn(),
    children: "PrimaryDisabled",
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: 'PrimaryDisabled' });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('id', 'primaryDiabledButton');
    await expect(button).toHaveAttribute('name', 'primaryDiabledButton');
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).toBeCalledTimes(0);
  }
};

export const PrimaryCentered: Story = {
  args: {
    id: 'primaryButtonCentered',
    name: 'primaryButtonCentered',
    buttonType: 'primary',
    onClick: fn(),
    children: "PrimaryCentered",
    textAlign: "center"
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: 'PrimaryCentered' });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('id', 'primaryButtonCentered');
    await expect(button).toHaveAttribute('name', 'primaryButtonCentered');
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
};

export const ButtonSecondary: Story = {
  args: {
    id: 'secondaryButton',
    name: 'secondaryButton',
    buttonType: 'secondary',
    onClick: fn(),
    children: "Secondary"
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: 'Secondary' });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('id', 'secondaryButton');
    await expect(button).toHaveAttribute('name', 'secondaryButton');
    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
};

export const ButtonSecondaryDisabled: Story = {
  args: {
    id: 'secondaryDisabledButton',
    name: 'secondaryDisabledButton',
    buttonType: 'secondary',
    disabled: true,
    onClick: fn(),
    children: "SecondaryDisabled",
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: 'SecondaryDisabled' });
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute('id', 'secondaryDisabledButton');
    await expect(button).toHaveAttribute('name', 'secondaryDisabledButton');
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).toBeCalledTimes(0);
  }
};