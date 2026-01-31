import * as React from 'react';
import {  Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import Collection from '../components/page/collection/Collection';
import Tile from '../components/page/tile/Tile';
import Text from '../components/page/text/Text';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Collection',
  component: Collection,
} satisfies Meta<typeof Collection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const CollectionDefault : Story = {
  args: {
    children: <><div>Div1</div><div>Div2</div></>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const div1 = await canvas.getByText('Div1');
    const div2 = await canvas.getByText('Div2');
    await expect(div1).toBeInTheDocument();
    await expect(div2).toBeInTheDocument();
  }
};

export const CollectionDefaultMargin : Story = {
  args: {
    marginTop: 'medium',
    marginBottom: 'medium',
    marginLeft: 'medium',
    marginRight: 'medium',
    children: <><div>Div1</div><div>Div2</div></>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const div1 = await canvas.getByText('Div1');
    const div2 = await canvas.getByText('Div2');
    await expect(div1).toBeInTheDocument();
    await expect(div2).toBeInTheDocument();
  }
};

export const CollectionDefaultMarginWrapped : Story = {
  args: {
    wrapper: {
      roundedBorder: true
    },
    marginTop: 'medium',
    marginBottom: 'medium',
    marginLeft: 'medium',
    marginRight: 'medium',
    children: <><div>Div1</div><div>Div2</div></>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const div1 = await canvas.getByText('Div1');
    const div2 = await canvas.getByText('Div2');
    await expect(div1).toBeInTheDocument();
    await expect(div2).toBeInTheDocument();
  }
};

export const CollectionDefaultPadding : Story = {
  args: {
    paddingTop: 'medium',
    paddingBottom: 'medium',
    paddingLeft: 'medium',
    paddingRight: 'medium',
    children: <><div>Div1</div><div>Div2</div></>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const div1 = await canvas.getByText('Div1');
    const div2 = await canvas.getByText('Div2');
    await expect(div1).toBeInTheDocument();
    await expect(div2).toBeInTheDocument();
  }
};

export const CollectionDefaultTimeline : Story = {
  args: {
    timeline: true,
    children: <>
      <Tile
        head={<Text type='h4' content="Headline" />}
      content = {<Text type='p' content="Some text" />}
      info={<>
        <Text type='small' content="2023/01/01" />
        -
        <Text type='small' content="2023/02/01" />
      </>}
      editable={true}
      padding= {"small" }
      marginBottom= {"medium" }
      />
      <Tile
        head={<Text type='h4' content="Headline" />}
        content = {<Text type='p' content="Some text" />}
        info={<>
          <Text type='small' content="2023/01/01" />
          -
          <Text type='small' content="2023/02/01" />
        </>}
        editable={true}
        padding= {"small" }
        marginBottom= {"medium" }
        />
        <Tile
          head={<Text type='h4' content="Headline" />}
          content = {<Text type='p' content="Some text" />}
          info={<>
            <Text type='small' content="2023/01/01" />
            -
            <Text type='small' content="2023/02/01" />
          </>}
          editable={true}
          padding= {"small" }
          marginBottom= {"medium" }
          />
  </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headlineTiles = await canvas.getAllByRole('heading', { name: 'Headline' });
    await expect(headlineTiles.length).toBe(3);
    for (const tile of headlineTiles) {
      await expect(tile).toBeInTheDocument();
    }
  }
};