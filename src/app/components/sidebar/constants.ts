import { BarChart3Icon, LayoutDashboardIcon, LucideIcon, PackageIcon, SettingsIcon, UsersIcon } from "lucide-react";

export type MenuItemData = {
    id: number;
    label: string;
    icon: LucideIcon;
    href: string;
}


export const SIDEBAR_WIDTH = 240;
export const SIDEBAR_COLLAPSED_WIDTH = 72;


export const MAIN_MENU: MenuItemData[] = [
    {
        id: 1,
        label: 'Dashboard',
        icon: LayoutDashboardIcon,
        href: '/'
    },
    {
        id: 2,
        label: 'Customers',
        icon: UsersIcon,
        href: '/customers'
    },
    {
        id: 3,
        label: 'Analytics',
        icon: BarChart3Icon,
        href: '/analytics'
    }
];

export const MANAGEMENT_MENU: MenuItemData[] = [
    {
        id: 1,
        label: 'Products',
        icon: PackageIcon,
        href: '/products'
    },
    {
        id: 2,
        label: 'Settings',
        icon: SettingsIcon,
        href: '/settings'
    }
]