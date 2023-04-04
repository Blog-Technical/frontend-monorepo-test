import type { Meta } from '@storybook/react';
import { CommonUi } from './common-ui';

const Story: Meta<typeof CommonUi> = {
  component: CommonUi,
  title: 'CommonUi',
};
export default Story;

export const Primary = {
  args: {},
};
