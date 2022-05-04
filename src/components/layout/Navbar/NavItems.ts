export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Trade",
    href: "/trade",
  },
  {
    label: "Stake",
    href: "/stake",
  },
  {
    label: "Assets",
    href: "/assets",
  },
];
