import { Avatar, ListItem, Stack, Typography, useTheme } from "@mui/material"
import Badge from "./Badge"
import { formatNumber } from '@/utils/formatters';

type SalesStatus = 'success' | 'pending' | 'failed';

const STATUS_CONFIG: Record<SalesStatus, { label: string; color: 'success' | 'warning' | 'error' }> = {
    success: { label: 'Completed', color: 'success' },
    pending: { label: 'Pending', color: 'warning' },
    failed: { label: 'Failed', color: 'error' },
};

interface SalesItemProps {
    avatar: string;
    name: string;
    surname: string;
    packageName: string;
    amount: number;
    date: string;
    status: SalesStatus;
}

const SalesItem = ({ avatar, name, surname, packageName, amount, date, status }: SalesItemProps) => {

    const statusConfig = STATUS_CONFIG[status];

    return (
        <Stack
            component={ListItem}
            direction="row"
            alignItems="center"
            gap={1.5}
            px={3}
            py={1.5}
            sx={{
                '&:hover': {
                    bgcolor: 'action.hover',
                },
                '&:active': {
                    bgcolor: 'action.selected',
                },
            }}
        >
            {/* Avatar */}
            <Avatar
                src={avatar}
                alt={`${name} ${surname}`}
                sx={{ width: 32, height: 32, flexShrink: 0 }}
            />

            {/* Info: Name + Package & Date */}
            <Stack flex={1} minWidth={0}>
                <Typography variant="body2" fontWeight={600} noWrap>
                    {name} {surname}
                </Typography>
                <Stack direction="row" alignItems="center" gap={0.5}>
                    <Typography variant="caption" color="text.secondary" noWrap>
                        {packageName}
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                        &middot;
                    </Typography>
                    <Typography variant="caption" color="text.secondary" noWrap>
                        {date}
                    </Typography>
                </Stack>
            </Stack>

            {/* Right: Amount + Status */}
            <Stack alignItems="flex-end" gap={0.25} flexShrink={0}>
                <Typography variant="body2" fontWeight={700}>
                    ${formatNumber(amount)}
                </Typography>
                <Badge color={statusConfig.color} size="sm">{statusConfig.label}</Badge>
            </Stack>
        </Stack>
    );
};

export default SalesItem;
