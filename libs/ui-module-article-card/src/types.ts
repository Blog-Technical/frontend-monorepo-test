import { ClassName } from '@react-monorepo/ui-theme';

export type ArticleCardProps = {
  content: ArticleContent;
  classNames?: ClassName;
};

export type ArticleContent = {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
};
