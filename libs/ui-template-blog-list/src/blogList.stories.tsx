import type { Meta } from '@storybook/react';
import { BlogList } from './blogList'

const Story: Meta<typeof BlogList> = {
  component: BlogList,
  title: 'BlogList',
};
export default Story;

export const Primary = {
  args: {},
};
