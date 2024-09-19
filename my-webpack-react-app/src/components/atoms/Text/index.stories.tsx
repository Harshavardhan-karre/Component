import type { Meta, StoryObj } from '@storybook/react';
import Text from './index';

const meta: Meta<typeof Text> = {
  title: "Components/atoms/Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    color: 'primary',
    fontSize: "20px",
    weight: "400",  // Changed from 'weight' to 'fontWeight'
    fontFamily: "Times New Roman",
  },
};

export const TextVariant: Story = {
  args: {
    color: 'primary',
    fontSize: "20px",
    weight: "400",  // Changed from 'weight' to 'fontWeight'
    fontFamily: "Times New Roman",
    width: "90px",
    height: "90px",
    text: "Change Text",
  },
};
