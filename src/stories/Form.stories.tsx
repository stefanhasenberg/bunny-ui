import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import  Form  from '../components/form/form/Form';
import Input from '../components/form/input/Input';
import { DefaultButtonProps } from '../components/form/button/Button.types';
import Range from '../components/form/range/Range';
import Select from '../components/form/select/Select';
import TextArea from '../components/form/textarea/TextArea';
import Checkbox from '../components/form/checkbox/Checkbox';
import FileInput from '../components/form/fileinput/FileInput';
import HiddenInput from '../components/form/hiddeninput/HiddenInput';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Form',
  component: Form,
} satisfies Meta<typeof Form>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FormItem : Story = {
  args: {
    id: 'form',
    name: 'form',
    method: 'POST',
    submitButtonProps: {
      id: "name",
      buttonType: "primary",
      name:"submit",
      children: "Submit"
    } as DefaultButtonProps,
    cancelButtonProps: {
      id: "name",
      name:"cancel",
      children: "Cancel"
    } as DefaultButtonProps,
    children: <>
    <Select name='selectInput' options={[{
        name: 'Option1',
        label: 'Option1',
        value: '1'
      }]} marginBottom='medium' ></Select>
      <Input name='textInput1' placeholder='Input 1' borders marginBottom='medium' validationRules={[{
      ruleName: 'required',
      errorMessage: 'Field may not be empty.'
    }]} />
      <Input name='textInputPassword' placeholder='Input Password' type='password' borders marginBottom='large'  validationRules={[{
      ruleName: 'password',
      errorMessage: 'Password not valid.'
    }]}  />
      <Range name='rangeInput' min={1} max={50} label='Range' marginBottom='medium'  />
      <TextArea name='textArea1' placeholder='Text area 1' marginBottom='medium' validationRules={[{
      ruleName: 'required',
      errorMessage: 'Field may not be empty.'
    }]}   />
      <FileInput id="fileInput" name="fileInput" placeholder='Your file' />
      <Checkbox id="checkbox" name="checkbox" label="Checkbox" />
      <HiddenInput id="hiddenInput" name="hiddenInput" value="hidden" />
    </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const form = await canvas.getByRole('form');
    await expect(form).toBeInTheDocument();
    await expect(form).toHaveAttribute('id', 'form');
    await expect(form).toHaveAttribute('name', 'form');
  }
};
