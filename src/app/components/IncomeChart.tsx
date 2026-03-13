'use client';

import { useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export type IncomeDataPoint = {
    month: string;
    income: number;
};

type IncomeChartProps = {
    data: IncomeDataPoint[];
};

export default function IncomeChart({ data }: IncomeChartProps) {
    const theme = useTheme();
    const [mounted, setMounted] = useState(false);

    // Fix SSR hydration mismatch with Recharts
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{ width: '100%', height: 300 }} />;
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={theme.palette.divider}
                    vertical={false}
                />
                <XAxis
                    dataKey="month"
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                    tickLine={{ stroke: theme.palette.divider }}
                    axisLine={{ stroke: theme.palette.divider }}
                />
                <YAxis
                    tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                    tickLine={{ stroke: theme.palette.divider }}
                    axisLine={{ stroke: theme.palette.divider }}
                    tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: theme.shape.borderRadius,
                        boxShadow: theme.shadows[4],
                    }}
                    labelStyle={{ color: theme.palette.text.primary, fontWeight: 600 }}
                    itemStyle={{ color: theme.palette.primary.main }}
                    formatter={(value: number | undefined) =>
                        value !== undefined ? [`$${value.toLocaleString()}`, 'Income'] : ['', '']
                    }
                />
                <Area
                    type="monotone"
                    dataKey="income"
                    stroke={theme.palette.primary.main}
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#incomeGradient)"
                    dot={{
                        fill: theme.palette.primary.main,
                        strokeWidth: 2,
                        r: 4,
                        stroke: theme.palette.background.paper,
                    }}
                    activeDot={{
                        r: 6,
                        fill: theme.palette.primary.main,
                        stroke: theme.palette.background.paper,
                        strokeWidth: 2,
                    }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
