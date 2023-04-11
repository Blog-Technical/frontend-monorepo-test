'use client';
import { tw } from '@react-monorepo/ui-theme';
import { Navigation } from '@react-monorepo/ui-module-navigation';
import { HeaderProps } from '../types';
import { usePathname } from 'next/navigation';

export const Header = (props: HeaderProps) => {
  const { menuItems } = props;

  const styles = useStyles();
  const pathname = usePathname();

  return (
    <div className={tw(styles.wrap)}>
      <div className={tw(styles.logoWrap)}>
        <img className={tw(styles.logo)} src={'/logo.png'} />
      </div>
      <Navigation menuItems={menuItems} currentPathname={pathname || ''} />
    </div>
  );
};

const useStyles = () => {
  return {
    wrap: tw(
      'h-100',
      'sticky',
      'top-0',
      'flex',
      'items-center',
      'justify-between',
      'px-200'
    ),
    logoWrap: tw(),
    logo: tw('max-h-40'),
  };
};
