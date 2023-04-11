import { tw } from '@react-monorepo/ui-theme';
import { NavigationProps } from './types';
import Link from 'next/link';

export const Navigation = (props: NavigationProps) => {
  const { menuItems, currentPathname } = props;
  const styles = useStyles();
  return (
    <>
      <div className={tw(styles.root)}>
        {menuItems?.map((menuItem) => {
          return (
            <Link
              className={tw(styles.link(currentPathname === menuItem.url))}
              href={menuItem.url}
            >
              {menuItem.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

const useStyles = () => {
  return {
    root: tw('text-tx22', 'flex', 'gap-20'),
    link: (routeActive: boolean) =>
      tw(
        routeActive ? tw('border-b-2', 'border-primary-1') : null,
        'hover:border-b-2',
        'hover:border-primary-1'
      ),
  };
};
