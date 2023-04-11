import { MenuItem } from '@react-monorepo/ui-module-navigation';
import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  menuItems: MenuItem[];
};

export type HeaderProps = {
  menuItems: MenuItem[];
};
