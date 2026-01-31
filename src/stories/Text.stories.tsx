import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import './main.css';

import Text from '../components/page/text/Text';
import { expect, within } from 'storybook/test';

const meta = {
  title: 'Bunny-UI/Text',
  component: Text,
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextDefault : Story = {
  args: {
    content: "Default Text",
    type: "default"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('Default Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextH1 : Story = {
  args: {
    content: "H1 Text",
    type: "h1"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('H1 Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextH2 : Story = {
  args: {
    content: "H2 Text",
    type: "h2"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('H2 Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextH3 : Story = {
  args: {
    content: "H3 Text",
    type: "h3"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('H3 Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextH4 : Story = {
  args: {
    content: "H4 Text",
    type: "h4"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('H4 Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextH5 : Story = {
  args: {
    content: "H5 Text",
    type: "h5"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('H5 Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextH6 : Story = {
  args: {
    content: "H6 Text",
    type: "h6"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('H6 Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextP : Story = {
  args: {
    content: "P Text",
    type: "p"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('P Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextSmall : Story = {
  args: {
    content: "Small Text",
    type: "small"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('Small Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextSpan : Story = {
  args: {
    content: "Span Text",
    type: "span"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('Span Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextQuote : Story = {
  args: {
    content: "Quote Text",
    type: "quote"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('Quote Text');
    await expect(text).toBeInTheDocument();
  }
};

export const TextLink : Story = {
  args: {
    content: "Linked Text",
    type: "span",
    link: {
      href: '#',
      title: 'Linked text'
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByText('Linked Text');
    await expect(text).toBeInTheDocument();
  }
};
