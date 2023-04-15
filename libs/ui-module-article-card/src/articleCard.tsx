import { tw } from '@react-monorepo/ui-theme';
import { ArticleCardProps } from './types';

export const ArticleCard = (props: ArticleCardProps) => {
  const { content, classNames } = props;
  const styles = useStyles();

  return (
    <>
      <div className={tw(styles.root, classNames)}>
        <a href={content.url} className={tw(styles.imageWrap)}>
          <img src={content.image}></img>
        </a>
        <div className={tw(styles.contentWrap)}>
          <div className={tw(styles.category)}>{content.category}</div>
          <a href={content.url} className={tw(styles.title)}>
            {content.title}
          </a>
          <div className={tw(styles.readTime)}>10min</div>
        </div>
      </div>
    </>
  );
};

const useStyles = () => {
  return {
    root: tw('grid', 'grid-cols-12', 'gap-30'),
    imageWrap: tw('col-span-5'),
    contentWrap: tw('col-span-7', 'flex', 'flex-col'),
    title: tw(
      'text-tx30',
      'mt-auto',
      'text-justify',
      'line-clamp-3',
      'font-primary'
    ),
    readTime: tw('mt-40', 'text-tx22'),
    category: tw('text-tx22'),
  };
};
