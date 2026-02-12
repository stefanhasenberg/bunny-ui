import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import DefinitionList from '../components/page/list/DefinitionList';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/DefinitionList',
  component: DefinitionList,
} satisfies Meta<typeof DefinitionList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefinitionListDefault : Story = {
  args: {
    editable: true,
    title: "Definition Default",
    content: [
      "Text1",
      "Text2",
      "Text3"
    ],
    canAdd: true,
    canDelete: true,
    addPlaceholder: "New item"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = await canvas.getByText('Definition Default');
    const item1 = await canvas.getByText('Text1');
    const item2 = await canvas.getByText('Text2');
    const item3 = await canvas.getByText('Text3');
    await expect(title).toBeInTheDocument();
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};
