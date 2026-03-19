'use client';

import { alpha, Avatar, AvatarGroup, LinearProgress, Paper, Stack, Typography, useTheme } from '@mui/material';
import { AlertCircle } from 'lucide-react';
import OverviewBadge from './OverviewBadge';
import { CardVariant, BadgeType, ValueFormat } from '@/types/overviewCard';
import type { OverviewCardProps } from '@/types/overviewCard';

const formatValue = (val: number | string, format?: ValueFormat): string => {
    if (typeof val === 'string') return val;

    switch (format) {
        case ValueFormat.COMPACT: {
            if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(1)}M`;
            if (val >= 1_000) return `${(val / 1_000).toFixed(1)}K`;
            return val.toString();
        }
        case ValueFormat.DURATION: {
            const totalSeconds = Math.round(val);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
        case ValueFormat.PERCENT:
            return `${val}`;
        default:
            return val.toLocaleString('tr-TR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });
    }
};

export default function OverviewCard({
    title,
    value,
    icon: Icon,
    color,
    sign = '',
    variant = CardVariant.DEFAULT,
    badgeType = BadgeType.NONE,
    badgeValue,
    subtitle,
    avatars,
    alertMessage,
    progressValue,
    format,
}: OverviewCardProps) {
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                flex: 1,
                borderRadius: 2,
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            }}
        >
            <Stack spacing={1.5}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack
                        sx={{
                            bgcolor: alpha(color, 0.12),
                            p: 0.75,
                            borderRadius: 1.5,
                        }}
                    >
                        <Icon size={18} color={color} />
                    </Stack>
                    <OverviewBadge badgeType={badgeType} badgeValue={badgeValue} />
                </Stack>
                <Typography
                    variant="overline"
                    fontWeight={600}
                    color="text.secondary"
                    sx={{ letterSpacing: 0.5 }}
                >
                    {title}
                </Typography>

                <Typography variant="h5" fontWeight={700} color="text.primary">
                    {sign}{formatValue(value, format)}
                </Typography>
                {variant === CardVariant.PROGRESS && progressValue !== undefined && (
                    <LinearProgress
                        variant="determinate"
                        value={progressValue}
                        sx={{
                            height: 6,
                            borderRadius: 1,
                            bgcolor: alpha(color, 0.12),
                            '& .MuiLinearProgress-bar': {
                                bgcolor: color,
                                borderRadius: 1,
                            },
                        }}
                    />
                )}

                {variant === CardVariant.DEFAULT && subtitle && (
                    <Typography variant="caption" color="text.secondary">
                        {subtitle}
                    </Typography>
                )}

                {variant === CardVariant.AVATARS && avatars && avatars.length > 0 && (
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <AvatarGroup
                            max={4}
                            sx={{
                                '& .MuiAvatar-root': {
                                    width: 28,
                                    height: 28,
                                    fontSize: '0.7rem',
                                    border: `2px solid ${theme.palette.background.paper}`,
                                },
                            }}
                        >
                            {avatars.map((avatar, index) => (
                                <Avatar key={index} src={avatar} />
                            ))}
                        </AvatarGroup>

                    </Stack>
                )}

                {variant === CardVariant.ALERT && alertMessage && (
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >
                        <AlertCircle size={14} color={theme.palette.error.main} />
                        <Typography variant="caption" color="error.main" fontWeight={500}>
                            {alertMessage}
                        </Typography>
                    </Stack>
                )}
            </Stack>
        </Paper>
    );
}
