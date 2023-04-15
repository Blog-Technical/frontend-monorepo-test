import { tw } from '@react-monorepo/ui-theme';
import { ListArticleProps } from './types';
import {
  ArticleCard,
  ArticleContent,
} from '@react-monorepo/ui-module-article-card';

export const ListArticle = (props: ListArticleProps) => {
  const { listContents } = props;
  const styles = useStyles();

  return (
    <div data-module="list-content">
      {listContents?.map((content: ArticleContent) => {
        return (
          <ArticleCard
            key={content.url}
            content={content}
            classNames={tw(styles.contentCard)}
          />
        );
      })}
    </div>
  );
};

const useStyles = () => {
  return {
    contentCard: tw('mb-60'),
  };
};
