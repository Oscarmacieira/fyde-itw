export type tMenu = {
  id: number;
  name?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export type tMenuList = tMenu & {
  subMenus?: tMenu[];
};

export type tUser = {
  id: number;
  name: string;
  src: string;
};

export type tTask = {
  id: number;
  title: string;
  status: string;
  time: string;
  users: tUser[];
  contractor: tUser;
  author: tUser;
  priority: string;
  description: string;
  imgSrc: string;
  createdAt: string;
  updatedAt: string;
};

export type tValidMenu = number | undefined;

export type tSelectedMenu = {
  main: tValidMenu;
  sub: tValidMenu;
};

export type tNavigationContext = {
  mobileOpen: boolean;
  collapsedMenu: tValidMenu;
  selectedMenu: tSelectedMenu;
  menus: tMenuList[];
  subMenus: tMenuList[];
  handleDrawerToggle: () => void;
  handleCollapseClick: (menu: tValidMenu) => void;
  setSelectedMenu: React.Dispatch<React.SetStateAction<tSelectedMenu>>;
  handleMenuClick: (menu: tSelectedMenu) => void;
  isMenuCollapsed: (menu: tValidMenu) => boolean;
  isSubMenuSelected: (menu: tSelectedMenu) => boolean;
};

export type tTaskContext = {
  tasks: tTask[];
  selectedTask: tTask | undefined;
  selectTask: (task: tTask) => void;
  closeTask: () => void;
  openTask: (task: tTask) => void;
  deleteTask: (task: tTask) => void;
  cloneTask: (task: tTask) => void;
};
