import { MenuItem } from '@react-monorepo/ui-module-navigation';

export const getRouteConfig = (): { menuItems: MenuItem[] } => {
  return {
    menuItems: [
      { title: 'Blog', url: '/blog' },
      { title: 'About us', url: '/about-us' },
    ],
  };
};
