interface MenuItem {
  name: string;
  label: {
    zh_CN: string;
    en_US: string;
  };
  icon?: string;
  /** 菜单id */
  key: string;
  /** 菜单路由 */
  path: string;
  /** 子菜单 */
  children?: MenuItem[];
}

export type MenuChild = Omit<MenuItem, 'children'>;

export type MenuList = MenuItem[];
