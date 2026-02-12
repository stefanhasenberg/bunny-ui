import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';


import Range from '../components/form/range/Range';
import { FormContext } from '../components/form';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Range',
  component: Range,
  decorators: [
    (Story) => (
      <FormContext.Provider value={{
        valid: true,
        updateField: () => {},
        fieldValues: []
      }}>
        <Story />
      </FormContext.Provider>
    ),
  ],
} satisfies Meta<typeof Range>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultRangeInput : Story = {
  args: {
    id: 'rangeInput',
    name: 'rangeInput',
    min: 0,
    max: 100,
    label: "Range input"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const rangeInput = await canvas.getByRole('slider');
    await expect(rangeInput).toBeInTheDocument();
    await expect(rangeInput).toHaveAttribute('id', 'rangeInput');
    await expect(rangeInput).toBeEnabled();
  }
};
