'use client';

import { getAnalyticsCards, INCOME_DATA } from "@/constants/dashboard";
import { Box, Button, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import OverviewCard from "../components/OverviewCard";
import IncomeChart from "../components/IncomeChart";
import { ChevronRight, Monitor, Smartphone, Tablet } from "lucide-react";
import CardHeader from "../components/CardHeader";
import { useState } from "react";

export const CompactSelect = styled(Select)(({ theme }) => ({
    minHeight: 24,
    height: 24,
    fontSize: '0.75rem',
    borderRadius: theme.shape.borderRadius,
    '& .MuiSelect-select': {
        padding: '4px 8px',
        minHeight: 'unset',
        lineHeight: '20px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.divider,
    },
    '& .MuiSvgIcon-root': {
        fontSize: '1rem',
    },
    '&:before, &:after, &:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
    },
}));

export default function AnalyticsPage() {

    const theme = useTheme();
    const ANALYTICS_CARDS = getAnalyticsCards(theme);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const POPULAR_PAGES = [
        {
            pagePath: "/",
            views: 1245,
            uniqueVisitors: 890,
            bounceRate: "2.5%",
        },
        {
            pagePath: "/about",
            views: 1245,
            uniqueVisitors: 890,
            bounceRate: "2.5%",
        },
        {
            pagePath: "/contact",
            views: 1245,
            uniqueVisitors: 890,
            bounceRate: "2.5%",
        },
        {
            pagePath: "/services",
            views: 1245,
            uniqueVisitors: 890,
            bounceRate: "2.5%",
        },
        {
            pagePath: "/products",
            views: 1245,
            uniqueVisitors: 890,
            bounceRate: "2.5%",
        },
    ];

    return (
        <Stack spacing={3}>
            <Stack spacing={0.5}>
                <Typography variant="h5" fontWeight={700}>
                    Analytics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Track and analyze your business metrics and performance indicators.
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                    gap: 2,
                }}
            >
                {ANALYTICS_CARDS.map((card) => (
                    <OverviewCard key={card.id} {...card} />
                ))}
            </Box>
            <Stack
                component={Paper}
                elevation={4}
                p={3}
                spacing={1}
                flex={1}
                sx={{
                    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                }}
            >
                <CardHeader
                    title="Income Analysis"
                    description="Monthly financial performance distribution"
                    action={
                        <CompactSelect
                            size="small"
                            variant="filled"
                            value="last_6_months"
                            onChange={() => { }}
                        >
                            <MenuItem value="last_6_months" sx={{ fontSize: '0.75rem', py: 0.5 }}>Last 6 Months</MenuItem>
                            <MenuItem value="last_12_months" sx={{ fontSize: '0.75rem', py: 0.5 }}>Last 12 Months</MenuItem>
                        </CompactSelect>
                    }
                />
                <IncomeChart data={INCOME_DATA} />
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <Stack
                    component={Paper}
                    elevation={4}
                    p={3}
                    spacing={2}
                    flex={1}
                    sx={{
                        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    }}
                >
                    <CardHeader
                        title="Device Usage"
                        description="Visitor distribution by platform"
                    />
                    <Stack direction="column" spacing={2}>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row" spacing={1}>
                                <Monitor size={20} color={theme.palette.text.secondary} />
                                <Typography variant="subtitle2">
                                    Desktop
                                </Typography>
                            </Stack>
                            <Typography variant="subtitle2">
                                65%
                            </Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row" spacing={1}>
                                <Smartphone size={20} color={theme.palette.text.secondary} />
                                <Typography variant="subtitle2">
                                    Mobile
                                </Typography>
                            </Stack>
                            <Typography variant="subtitle2">
                                35%
                            </Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row" spacing={1}>
                                <Tablet size={20} color={theme.palette.text.secondary} />
                                <Typography variant="subtitle2">
                                    Tablet
                                </Typography>
                            </Stack>
                            <Typography variant="subtitle2">
                                5%
                            </Typography>
                        </Stack>
                    </Stack>

                </Stack>
                <Stack
                    component={Paper}
                    elevation={4}
                    p={3}
                    flex={2}
                    spacing={2}
                    sx={{
                        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    }}
                >
                    <CardHeader
                        title="Popular Pages"
                        description="Top pages visited by users"
                        action={
                            <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
                                View All
                            </Button>
                        }
                    />
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Page Path</TableCell>
                                    <TableCell>Views</TableCell>
                                    <TableCell >Unique Visitors</TableCell>
                                    <TableCell>Bounce Rate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {POPULAR_PAGES.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.pagePath}>
                                        <TableCell>{row.pagePath}</TableCell>
                                        <TableCell>{row.views}</TableCell>
                                        <TableCell>{row.uniqueVisitors}</TableCell>
                                        <TableCell>{row.bounceRate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={POPULAR_PAGES.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={(event, newPage) => setPage(newPage)}
                            onRowsPerPageChange={(event) => {
                                setRowsPerPage(parseInt(event.target.value, 10));
                                setPage(0);
                            }}
                        />
                    </TableContainer>

                </Stack>
            </Stack>
        </Stack >
    );
}
