import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import SimpleList from '../components/page/list/SimpleList';
import SingleDefinitionItem from '../components/page/list/SingleDefinitionItem';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/SimpleList',
  component: SimpleList,
} satisfies Meta<typeof SimpleList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleListDefault : Story = {
  args: {
    items: [{
      children: "Item 1"
    }, {
      children: "Item 2"
    }, {
      children: "Item 3"
    }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('Item 1');
    const item2 = await canvas.getByText('Item 2');
    const item3 = await canvas.getByText('Item 3');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};

export const SimpleListInline : Story = {
  args: {
    items: [{
      children: "Item 1"
    }, {
      children: "Item 2"
    }, {
      children: "Item 3"
    }
    ],
    inline: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('Item 1');
    const item2 = await canvas.getByText('Item 2');
    const item3 = await canvas.getByText('Item 3');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};

export const SimpleListInlineMargin : Story = {
  args: {
    items: [{
      children: "Item 1",
      margin: "medium"
    }, {
      children: "Item 2",
      margin: "medium"
    }, {
      children: "Item 3",
      margin: "medium"
    }
    ],
    inline: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('Item 1');
    const item2 = await canvas.getByText('Item 2');
    const item3 = await canvas.getByText('Item 3');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};


export const SimpleListInlineDefinitionList : Story = {
  args: {
    items: [{
      children: <SingleDefinitionItem title='Item 1' content={"Content 1"} editable onSave={(newValue: string) => {console.log("New value", newValue)}}></SingleDefinitionItem>,
      margin: "medium"
    }, {
      children: <SingleDefinitionItem title='Item 2' content={"Content 2"}></SingleDefinitionItem>,
      margin: "medium"
    }, {
      children: <SingleDefinitionItem title='Item 3' content={"Content 3"}></SingleDefinitionItem>,
      margin: "medium"
    }
    ],
    inline: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const item1 = await canvas.getByText('Item 1');
    const item2 = await canvas.getByText('Item 2');
    const item3 = await canvas.getByText('Item 3');
    await expect(item1).toBeInTheDocument();
    await expect(item2).toBeInTheDocument();
    await expect(item3).toBeInTheDocument();
  }
};
