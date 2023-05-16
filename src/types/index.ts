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
