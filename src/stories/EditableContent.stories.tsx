import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import EditableContent from '../components/page/text/EditableContent';
import { expect, fn, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/EditableContent',
  component: EditableContent,
} satisfies Meta<typeof EditableContent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EditableContentDefault : Story = {
  args: {
    editable: true,
    title: "Editable content default",
    name: "editContent",
    save: fn(),
    saveButtonText: "Speichern",
    text: "Some text"
  },
  play: async ({ canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const title = await canvas.getByText('Editable content default');
    const content = await canvas.getByText('Some text');
    await expect(title).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
    const editIcon = await canvas.getByRole('img');
    await userEvent.click(editIcon);
    const button = await canvas.getByRole('button', { name: 'Speichern' });
    await userEvent.click(button);
  }
};

export const EditableContentRichtext : Story = {
  args: {
    editable: true,
    title: "Editable content richtext",
    name: "editContent",
    save: fn(),
    saveButtonText: "Speichern",
    richText: true,
    text: "This is some richtext<br/>With a second line<br/>And a link to <a href=\"https://www.google.de\">https://www.google.de</a>"
  },
  play: async ({ canvasElement, userEvent, args }) => {
    const canvas = within(canvasElement);
    const title = await canvas.getByText('Editable content richtext');
    const content = await canvas.getByText('This is some richtext', {exact: false});
    await expect(title).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
    const editIcon = await canvas.getByRole('img');
    await userEvent.click(editIcon);
    const button = await canvas.getByRole('button', { name: 'Speichern' });
    await userEvent.click(button);
  }
};
