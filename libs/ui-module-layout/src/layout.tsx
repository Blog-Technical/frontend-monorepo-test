import { tw } from '@react-monorepo/ui-theme';
import { Header } from './components/header';
import { LayoutProps } from './types';

export const Layout = ({ children, menuItems }: LayoutProps) => {
  const styles = useStyles();

  return (
    <div data-module="layout">
      <Header menuItems={menuItems} />
      <div className={tw(styles.wrapBody)}>{children}</div>
    </div>
  );
};

const useStyles = () => {
  return {
    wrapBody: tw('px-200'),
  };
};
