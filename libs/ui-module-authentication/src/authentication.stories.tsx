import type { Meta } from '@storybook/react';
import { UIAuthentication } from './authentication';

const Story: Meta<typeof UIAuthentication> = {
  component: UIAuthentication,
  title: 'UIAuthentication',
};
export default Story;

export const Primary = {
  args: {},
};
