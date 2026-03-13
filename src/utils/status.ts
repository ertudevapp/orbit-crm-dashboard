import { SalesStatus } from '@/types/dashboard';

/**
 * Status configuration mapping
 * Single source of truth for status styling
 */
export const STATUS_CONFIG = {
    success: {
        color: 'success' as const,
        label: 'Success',
    },
    pending: {
        color: 'warning' as const,
        label: 'Pending',
    },
    failed: {
        color: 'error' as const,
        label: 'Failed',
    },
} as const;

/**
 * Get status configuration for a given status
 */
export const getStatusConfig = (status: SalesStatus) => {
    return STATUS_CONFIG[status];
};
