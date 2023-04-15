import { tw } from '@react-monorepo/ui-theme';
import { BlogListProps } from './types';
import { ListArticle } from '@react-monorepo/ui-module-list-article';
import dynamic from 'next/dynamic';
import { MDEditorProps } from '@uiw/react-md-editor';

const MDEditor = dynamic<MDEditorProps>(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

export const BlogList = (props: BlogListProps) => {
  const { heading, listContents, data } = props;
  const styles = useStyles();

  return (
    <div data-template="blog-list" className={tw(styles.root)}>
      {/* <div className={tw(styles.heading)}>{heading}</div> */}
      {/* <ListArticle listContents={listContents} /> */}
      <MDEditor value={data} height={700} />
    </div>
  );
};

const useStyles = () => {
  return {
    root: tw('mt-60'),
    heading: tw('text-tx48', 'mb-30'),
  };
};
