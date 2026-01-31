import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import Input from '../components/form/input/Input';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Input',
  component: Input,
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTextInput : Story = {
  args: {
    id: 'textInput',
    name: 'textInput',
    placeholder: 'Text Input',
    borders: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = await canvas.getByPlaceholderText('Text Input');
    await expect(textInput).toBeInTheDocument();
    await expect(textInput).toHaveAttribute('id', 'textInput');
    await expect(textInput).toHaveAttribute('name', 'textInput');
    await expect(textInput).toBeEnabled();
  }
};

export const DefaultTextInputDisabled : Story = {
  args: {
    id: 'textInputDisabled',
    name: 'textInputDisabled',
    placeholder: 'Text Input Disabled',
    borders: true,
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = await canvas.getByPlaceholderText('Text Input Disabled');
    await expect(textInput).toBeInTheDocument();
    await expect(textInput).toHaveAttribute('id', 'textInputDisabled');
    await expect(textInput).toHaveAttribute('name', 'textInputDisabled');
    await expect(textInput).toBeDisabled();
  }
};

export const PasswordTextInput : Story = {
  args: {
    id: 'passwordTextInput',
    name: 'passwordTextInput',
    type: 'password',
    placeholder: 'Password Text Input',
    borders: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = await canvas.getByPlaceholderText('Password Text Input');
    await expect(textInput).toBeInTheDocument();
    await expect(textInput).toHaveAttribute('id', 'passwordTextInput');
    await expect(textInput).toHaveAttribute('name', 'passwordTextInput');
    await expect(textInput).toHaveAttribute('type', 'password');
    await expect(textInput).toBeEnabled();
  }
};

export const DefaultTextInputRequired : Story = {
  args: {
    id: 'textInputRequired',
    name: 'textInputRequired',
    placeholder: 'Text Input Required Rule',
    borders: true,
    validationRules: [{
      ruleName: 'required',
      errorMessage: 'Field may not be empty.'
    }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textInput = await canvas.getByPlaceholderText('Text Input Required Rule');
    await expect(textInput).toBeInTheDocument();
    await expect(textInput).toHaveAttribute('id', 'textInputRequired');
    await expect(textInput).toHaveAttribute('name', 'textInputRequired');
    await expect(textInput).toBeEnabled();
    await textInput.focus();
    await textInput.blur();
    const errorMessage = await canvas.getByText('Field may not be empty.');
    await expect(errorMessage).toBeInTheDocument();
  }
};