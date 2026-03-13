'use client';

import { alpha, Stack, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export type BadgeColor =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';

export type BadgeVariant = 'filled' | 'outlined' | 'soft' | 'inverted';

export type BadgeSize = 'xs' | 'sm' | 'md';

export interface BadgeProps {
    color?: BadgeColor;
    variant?: BadgeVariant;
    startIcon?: ReactNode;
    size?: BadgeSize;
    children?: ReactNode;
}

const SIZE_CONFIG: Record<BadgeSize, { px: number; py: number; fontSize: string }> = {
    xs: { px: 0.75, py: 0.125, fontSize: '0.675rem' },
    sm: { px: 1, py: 0.25, fontSize: '0.75rem' },
    md: { px: 1.25, py: 0.5, fontSize: '0.8125rem' },
};

export default function Badge({
    color = 'default',
    variant = 'soft',
    startIcon,
    size = 'sm',
    children
}: BadgeProps) {
    const theme = useTheme();

    const getThemeColor = (colorKey: BadgeColor) => {
        switch (colorKey) {
            case 'primary': return theme.palette.primary.main;
            case 'secondary': return theme.palette.secondary.main;
            case 'info': return theme.palette.info.main;
            case 'success': return theme.palette.success.main;
            case 'warning': return theme.palette.warning.main;
            case 'error': return theme.palette.error.main;
            default: return theme.palette.text.secondary;
        }
    };

    const mainColor = getThemeColor(color);

    const getVariantStyles = () => {
        switch (variant) {
            case 'filled':
                return {
                    bgcolor: mainColor,
                    color: theme.palette.common.white,
                    border: 'none'
                };
            case 'outlined':
                return {
                    bgcolor: 'transparent',
                    color: mainColor,
                    border: `1px solid ${alpha(mainColor, 0.48)}`
                };
            case 'soft':
                return {
                    bgcolor: alpha(mainColor, 0.12),
                    color: color === 'default' ? theme.palette.text.primary : mainColor,
                    border: 'none'
                };
            case 'inverted':
                return {
                    bgcolor: theme.palette.grey[800],
                    color: theme.palette.common.white,
                    border: 'none'
                };
        }
    };

    const styles = getVariantStyles();
    const sizeConfig = SIZE_CONFIG[size];

    if (!children && !startIcon) return null;

    return (
        <Stack
            component="span"
            direction="row"
            alignItems="center"
            gap={0.5}
            sx={{
                display: 'inline-flex',
                bgcolor: styles.bgcolor,
                color: styles.color,
                border: styles.border,
                px: sizeConfig.px,
                py: sizeConfig.py,
                borderRadius: 1,
                transition: theme.transitions.create(['background-color', 'color'], {
                    duration: theme.transitions.duration.short
                })
            }}
        >
            {startIcon && (
                <Stack component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    {startIcon}
                </Stack>
            )}

            {children && (
                <Typography
                    component="span"
                    fontWeight={600}
                    sx={{ lineHeight: 1.5, fontSize: sizeConfig.fontSize }}
                >
                    {children}
                </Typography>
            )}
        </Stack>
    );
}
