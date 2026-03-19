/**
 * Dashboard data constants
 */

import { Theme } from '@mui/material';
import { Banknote, CircleCheckBig, Clock, Globe, MousePointerClick, Ticket, TrendingUp, Users } from 'lucide-react';
import { OverviewCardProps, CardVariant, BadgeType, ValueFormat } from '@/types/overviewCard';
import { IncomeDataPoint } from '@/app/components/IncomeChart';
import { TrafficSourceData } from '@/app/components/TrafficSourcesChart';
import { SalesData } from '@/types/dashboard';

/**
 * Get overview cards data
 * Note: theme colors need to be injected at runtime
 */
export const getOverviewCards = (theme: Theme): OverviewCardProps[] => [
    {
        id: 1,
        title: 'TOTAL REVENUE',
        value: 54230,
        icon: Banknote,
        color: theme.palette.primary.main,
        sign: '$',
        variant: CardVariant.PROGRESS,
        badgeType: BadgeType.INCREASE,
        badgeValue: 12,
        progressValue: 75,
    },
    {
        id: 2,
        title: 'ACTIVE USERS',
        value: 1234,
        icon: Users,
        color: theme.palette.info.main,
        variant: CardVariant.DEFAULT,
        badgeType: BadgeType.STABLE,
        subtitle: '0.5% change from last month',
    },
    {
        id: 3,
        title: 'NEW SUBSCRIPTIONS',
        value: '+45',
        icon: CircleCheckBig,
        color: theme.palette.success.main,
        variant: CardVariant.AVATARS,
        badgeType: BadgeType.INCREASE,
        badgeValue: 45,
        avatars: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',


        ],
    },
    {
        id: 4,
        title: 'PENDING REQUESTS',
        value: 12,
        icon: Ticket,
        color: theme.palette.error.main,
        variant: CardVariant.ALERT,
        badgeType: BadgeType.HIGH,
        alertMessage: 'Requires critical attention',
    },
];

/**
 * Latest sales data
 */
export const LATEST_SALES: SalesData[] = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
        avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        amount: 4500.0,
        package: 'Enterprise Package',
        date: '2024-02-01',
        status: 'success',
    },
    {
        id: 2,
        name: 'Sarah',
        surname: 'Smith',
        avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        amount: 3200.5,
        package: 'Pro Package',
        date: '2024-01-28',
        status: 'success',
    },
    {
        id: 3,
        name: 'Michael',
        surname: 'Chen',
        avatar:
            'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        amount: 1800.0,
        package: 'Pro Package',
        date: '2024-01-25',
        status: 'pending',
    },
    {
        id: 4,
        name: 'Emily',
        surname: 'Wilson',
        avatar:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        amount: 950.25,
        package: 'Basic Package',
        date: '2024-01-22',
        status: 'success',
    },
    {
        id: 5,
        name: 'James',
        surname: 'Brown',
        avatar:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        amount: 2100.75,
        package: 'Basic Package',
        date: '2024-01-18',
        status: 'failed',
    },
];

/**
 * Income analysis chart data
 */
export const INCOME_DATA: IncomeDataPoint[] = [
    { month: 'JAN', income: 12000 },
    { month: 'FEB', income: 19000 },
    { month: 'MAR', income: 15000 },
    { month: 'APR', income: 22000 },
    { month: 'MAY', income: 28000 },
    { month: 'JUN', income: 32000 },
];

/**
 * Traffic sources data
 * Note: theme colors need to be injected at runtime
 */
export const getTrafficSources = (theme: Theme): TrafficSourceData[] => [
    { name: 'Direct', value: 65, color: theme.palette.primary.main },
    { name: 'Social', value: 25, color: theme.palette.info.main },
    { name: 'Referral', value: 10, color: theme.palette.warning.main },
];

export const getAnalyticsCards = (theme: Theme) => [
    {
        id: 1,
        title: "Total Sessions",
        value: 124500,
        icon: Globe,
        color: theme.palette.info.main,
        sign: "",
        format: ValueFormat.COMPACT,
        variant: CardVariant.DEFAULT,
        badgeType: BadgeType.INCREASE,
        badgeValue: 12,
    },
    {
        id: 2,
        title: "Average Duration",
        value: 345,
        icon: Clock,
        color: theme.palette.primary.main,
        sign: "",
        format: ValueFormat.DURATION,
        variant: CardVariant.DEFAULT,
        badgeType: BadgeType.INCREASE,
        badgeValue: 8,
    },
    {
        id: 3,
        title: "Exit immediately",
        value: 32.4,
        icon: MousePointerClick,
        color: theme.palette.success.main,
        sign: "%",
        format: ValueFormat.PERCENT,
        variant: CardVariant.DEFAULT,
        badgeType: BadgeType.DECREASE,
        badgeValue: 3,
    },
    {
        id: 4,
        title: "Bounce Rate",
        value: 4.2,
        icon: TrendingUp,
        color: theme.palette.error.main,
        sign: "%",
        format: ValueFormat.PERCENT,
        variant: CardVariant.DEFAULT,
        badgeType: BadgeType.DECREASE,
        badgeValue: 1,
    },

]

