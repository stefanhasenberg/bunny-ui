import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import Grid from '../components/page/grid/Grid';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;
export default meta;

type Story = StoryObj<typeof meta>;


export const GridOne : Story = {
  args: {
    gridGap: "medium",
    gridType: "one",
    children: <>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell1</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell2</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell3</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell4</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell5</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell6</div>
      </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cell1 = await canvas.getByText('Cell1');
    const cell2 = await canvas.getByText('Cell2');
    const cell3 = await canvas.getByText('Cell3');
    const cell4 = await canvas.getByText('Cell4');
    const cell5 = await canvas.getByText('Cell5');
    const cell6 = await canvas.getByText('Cell6');
    await expect(cell1).toBeInTheDocument();
    await expect(cell2).toBeInTheDocument();
    await expect(cell3).toBeInTheDocument();
    await expect(cell4).toBeInTheDocument();
    await expect(cell5).toBeInTheDocument();
    await expect(cell6).toBeInTheDocument();
  }
};

export const GridOneOne : Story = {
  args: {
    gridGap: "medium",
    gridType: "one-one",
    children: <>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell1</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell2</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell3</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell4</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell5</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell6</div>
    </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cell1 = await canvas.getByText('Cell1');
    const cell2 = await canvas.getByText('Cell2');
    const cell3 = await canvas.getByText('Cell3');
    const cell4 = await canvas.getByText('Cell4');
    const cell5 = await canvas.getByText('Cell5');
    const cell6 = await canvas.getByText('Cell6');
    await expect(cell1).toBeInTheDocument();
    await expect(cell2).toBeInTheDocument();
    await expect(cell3).toBeInTheDocument();
    await expect(cell4).toBeInTheDocument();
    await expect(cell5).toBeInTheDocument();
    await expect(cell6).toBeInTheDocument();
  }
};

export const GridOneOneOne : Story = {
  args: {
    gridGap: "medium",
    gridType: "one-one-one",
    children: <>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell1</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell2</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell3</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell4</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell5</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell6</div>
    </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cell1 = await canvas.getByText('Cell1');
    const cell2 = await canvas.getByText('Cell2');
    const cell3 = await canvas.getByText('Cell3');
    const cell4 = await canvas.getByText('Cell4');
    const cell5 = await canvas.getByText('Cell5');
    const cell6 = await canvas.getByText('Cell6');
    await expect(cell1).toBeInTheDocument();
    await expect(cell2).toBeInTheDocument();
    await expect(cell3).toBeInTheDocument();
    await expect(cell4).toBeInTheDocument();
    await expect(cell5).toBeInTheDocument();
    await expect(cell6).toBeInTheDocument();
  }
};

export const GridOneOneOneOne : Story = {
  args: {
    gridGap: "medium",
    gridType: "one-one-one-one",
    children: <>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell1</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell2</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell3</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell4</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell5</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell6</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell7</div>
      <div style={{backgroundColor: '#EFEFEF'}}>Cell8</div>
    </>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cell1 = await canvas.getByText('Cell1');
    const cell2 = await canvas.getByText('Cell2');
    const cell3 = await canvas.getByText('Cell3');
    const cell4 = await canvas.getByText('Cell4');
    const cell5 = await canvas.getByText('Cell5');
    const cell6 = await canvas.getByText('Cell6');
    const cell7 = await canvas.getByText('Cell7');
    const cell8 = await canvas.getByText('Cell8');
    await expect(cell1).toBeInTheDocument();
    await expect(cell2).toBeInTheDocument();
    await expect(cell3).toBeInTheDocument();
    await expect(cell4).toBeInTheDocument();
    await expect(cell5).toBeInTheDocument();
    await expect(cell6).toBeInTheDocument();
    await expect(cell7).toBeInTheDocument();
    await expect(cell8).toBeInTheDocument();
  }
};