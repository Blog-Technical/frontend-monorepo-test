import type { Meta } from '@storybook/react';
import { ArticleCard } from './articleCard';

const Story: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  title: 'ArticleCard',
};
export default Story;

export const Primary = {
  args: {},
};
