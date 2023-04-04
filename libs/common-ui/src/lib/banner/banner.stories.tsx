import type { Meta } from '@storybook/react';
import { Banner } from './banner';

const Story: Meta<typeof Banner> = {
  component: Banner,
  title: 'Banner',
};
export default Story;

export const Primary = {
  args: {
    text: '',
  },
};
