export type tMenu = {
  id: number;
  name?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export type tMenuList = tMenu & {
  subMenus?: tMenu[];
};
