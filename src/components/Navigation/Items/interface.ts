export interface iNavChilditem {
  title: string;
  activePaths: [string];
  href: string;
  authState: string;
  requiredRoles?: [string];
}

export interface iNavItem {
  item: {
    title: string;
    href: string;
    activePaths: [string];
    authState: string;
    icon: string;
    requiredRoles?: [string];
    children?: {
      items: [iNavChilditem];
    };
  };
}
