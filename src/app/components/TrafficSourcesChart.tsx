'use client';

import { Stack, Typography, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

export type TrafficSourceData = {
    name: string;
    value: number;
    color: string;
};

type TrafficSourcesChartProps = {
    data: TrafficSourceData[];
};

export default function TrafficSourcesChart({ data }: TrafficSourcesChartProps) {
    const theme = useTheme();
    const [mounted, setMounted] = useState(false);

    // Fix SSR hydration mismatch with Recharts
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const total = data.reduce((sum, item) => sum + item.value, 0);

    if (!mounted) {
        return <div style={{ width: '100%', height: 200 }} />;
    }

    return (
        <Stack spacing={3} alignItems="center">
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        strokeWidth={0}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            fill: theme.palette.text.primary,
                        }}
                    >
                        {total}%
                    </text>
                    <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                            fontSize: '12px',
                            fontWeight: 400,
                            fill: theme.palette.text.secondary,
                        }}
                    >
                        TOTAL
                    </text>
                </PieChart>
            </ResponsiveContainer>
            <Stack spacing={1.5} width="100%">
                {data.map((item, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Stack
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    bgcolor: item.color,
                                }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                {item.name}
                            </Typography>
                        </Stack>
                        <Typography variant="body2" fontWeight={600} color="text.primary">
                            {item.value}%
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
}
