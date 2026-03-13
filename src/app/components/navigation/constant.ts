import { BarChart3Icon, LayoutDashboardIcon, LucideIcon, PackageIcon, SettingsIcon, Sparkles, UsersIcon } from "lucide-react";

export type MenuItemData = {
    id: number;
    label: string;
    icon: LucideIcon;
    href: string;
}

export const MOBILE_MENU: MenuItemData[] = [
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
    },
    {
        id: 4,
        label: 'Products',
        icon: PackageIcon,
        href: '/products'
    },
    {
        id: 5,
        label: 'Settings',
        icon: SettingsIcon,
        href: '/settings'
    },
    {
        id: 6,
        label: 'Orbit AI',
        icon: Sparkles,
        href: '/orbit-ai'
    }
];