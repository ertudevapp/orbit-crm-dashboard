import { LucideIcon } from 'lucide-react';

export enum CardVariant {
    DEFAULT = 'default',
    PROGRESS = 'progress',
    AVATARS = 'avatars',
    ALERT = 'alert'
}

export enum BadgeType {
    INCREASE = 'increase',
    DECREASE = 'decrease',
    STABLE = 'stable',
    HIGH = 'high',
    LOW = 'low',
    NONE = 'none'
}

export type OverviewCardProps = {
    id: number;
    title: string;
    value: number | string;
    icon: LucideIcon;
    color: string;
    sign?: string;
    variant?: CardVariant;
    badgeType?: BadgeType;
    badgeValue?: number;
    subtitle?: string;
    avatars?: string[];
    alertMessage?: string;
    progressValue?: number;
};

