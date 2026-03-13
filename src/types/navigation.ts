import { LucideIcon } from 'lucide-react';

/**
 * Shared navigation menu item type
 * Used by both sidebar and bottom navigation
 */
export interface MenuItemData {
    id: number;
    label: string;
    icon: LucideIcon;
    href: string;
}
