import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import DatePicker from '../components/form/datepicker/DatePicker';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/DatePicker',
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultDatePicker : Story = {
  args: {
    id: 'datePicker',
    name: 'datePicker',
    placeholder: 'Date picker',
    borders: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const datePicker = await canvas.getByPlaceholderText('Date picker');
    await expect(datePicker).toBeInTheDocument();
    await expect(datePicker).toHaveAttribute('id', 'datePicker');
    await expect(datePicker).toHaveAttribute('name', 'datePicker');
    await expect(datePicker).toBeEnabled();
  }
};

export const DefaultDatePickerDisabled : Story = {
  args: {
    name: 'datePickerDisabled',
    placeholder: 'Date picker Disabled',
    borders: true,
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const datePicker = await canvas.getByPlaceholderText('Date picker Disabled');
    await expect(datePicker).toBeInTheDocument();
    await expect(datePicker).toHaveAttribute('name', 'datePickerDisabled');
    await expect(datePicker).toBeDisabled();
  }
};

export const DefaultDatePickerRequired : Story = {
  args: {
    id: 'datePickerRequired',
    name: 'datePickerRequired',
    placeholder: 'Date Picker Required Rule',
    borders: true,
    validationRules: [{
      ruleName: 'required',
      errorMessage: 'Field may not be empty.'
    }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const datePicker = await canvas.getByPlaceholderText('Date Picker Required Rule');
    await expect(datePicker).toBeInTheDocument();
    await expect(datePicker).toHaveAttribute('id', 'datePickerRequired');
    await expect(datePicker).toHaveAttribute('name', 'datePickerRequired');
    await expect(datePicker).toBeEnabled();
    await datePicker.focus();
    await datePicker.blur();
    const errorMessage = await canvas.getByText('Field may not be empty.');
    await expect(errorMessage).toBeInTheDocument();
  }
};

export const DefaultDatePickerBetween : Story = {
  args: {
    id: 'datePickerBetween',
    name: 'datePickerBetween',
    placeholder: 'Date Picker Between Rule',
    borders: true,
    validationRules: [{
        ruleName: 'required',
        errorMessage: 'Field may not be empty.'
    },{
      ruleName: 'larger',
      refValue: '2023-05-01',
      errorMessage: 'Date needs to be after 01.05.2023.'
    },{
      ruleName: 'smaller',
      refValue: '2023-06-01',
      errorMessage: 'Date needs to be before 01.06.2023.'
    }]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const datePicker = await canvas.getByPlaceholderText('Date Picker Between Rule');
    await expect(datePicker).toBeInTheDocument();
    await expect(datePicker).toHaveAttribute('id', 'datePickerBetween');
    await expect(datePicker).toHaveAttribute('name', 'datePickerBetween');
    await expect(datePicker).toBeEnabled();
  }
};