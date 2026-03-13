'use client';

import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Badge, { BadgeColor } from './Badge';
import { BadgeType } from '@/types/overviewCard';

const BADGE_CONFIG: Record<BadgeType, {
    label: string;
    color: BadgeColor;
    icon?: typeof TrendingUp;
}> = {
    [BadgeType.INCREASE]: { label: '', color: 'success', icon: TrendingUp },
    [BadgeType.DECREASE]: { label: '', color: 'error', icon: TrendingDown },
    [BadgeType.STABLE]: { label: 'Stable', color: 'default', icon: Minus },
    [BadgeType.HIGH]: { label: 'High', color: 'error' },
    [BadgeType.LOW]: { label: 'Low', color: 'success' },
    [BadgeType.NONE]: { label: '', color: 'default' },
};

interface OverviewBadgeProps {
    badgeType: BadgeType;
    badgeValue?: number;
}

export default function OverviewBadge({ badgeType, badgeValue }: OverviewBadgeProps) {
    if (badgeType === BadgeType.NONE) return null;

    const config = BADGE_CONFIG[badgeType];

    if ((badgeType === BadgeType.INCREASE || badgeType === BadgeType.DECREASE) && badgeValue !== undefined) {
        const Icon = config.icon!;
        const sign = badgeValue > 0 ? '+' : '';

        return (
            <Badge
                color={config.color}
                startIcon={<Icon size={12} />}
            >
                {sign}{badgeValue}%
            </Badge>
        );
    }

    return (
        <Badge
            color={config.color}
            startIcon={config.icon ? <config.icon size={12} /> : undefined}
        >
            {config.label}
        </Badge>
    );
}
