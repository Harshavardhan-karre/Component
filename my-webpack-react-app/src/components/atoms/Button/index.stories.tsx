import type { Meta, StoryObj } from '@storybook/react';

import Button from './index'

const meta: Meta<typeof Button> = {
  title: "Components/atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonVariant: Story = {
  args: {
    text:"Button Text",
    Buttoncolor: 'primary',
  },
};

export const ButtonShapes: Story = {
    args: {
      text:"Button Text",
      Buttoncolor: 'primary',
      radius:"20",
      padding:"10",
      width:"50px",
      height:"50px",
    },
  };