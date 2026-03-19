'use client';

import { alpha, Avatar, Box, Button, Chip, Divider, MenuItem, Paper, Select, Stack, styled, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Download, RefreshCcw } from 'lucide-react';
import { useState } from 'react';
import SalesItem from './components/SalesItem';
import CardHeader from './components/CardHeader';
import IncomeChart from './components/IncomeChart';
import TrafficSourcesChart from './components/TrafficSourcesChart';
import OverviewCard from './components/OverviewCard';
import { getOverviewCards, LATEST_SALES, INCOME_DATA, getTrafficSources } from '@/constants/dashboard';
import UserItem from './components/UserItem';

const CompactSelect = styled(Select)(({ theme }) => ({
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

export default function DashboardPage() {
    const theme = useTheme();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const OVERVIEW_CARDS = getOverviewCards(theme);
    const TRAFFIC_SOURCES = getTrafficSources(theme);
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <Stack spacing={.5} flex={2}>
                    <Typography variant="subtitle1" fontWeight={700}>
                        Welcome, Marty! 👋
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Here is Orbit Dashboard&apos;s summary for today.
                    </Typography>
                </Stack>
                <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2 }} alignItems={{ xs: "flex-end", md: "center" }} flex={1} justifyContent="flex-end">
                    <Button variant="outlined" size="small" startIcon={mdUp ? <Download size={12} /> : null}>
                        Get Report
                    </Button>
                    <Button variant="contained" size="small" startIcon={mdUp ? <RefreshCcw size={12} /> : null}>
                        Refresh Data
                    </Button>
                </Stack>
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                    gap: 2,
                }}
            >
                {OVERVIEW_CARDS.map((card) => (
                    <OverviewCard key={card.id} {...card} />
                ))}
            </Box>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <Stack
                    component={Paper}
                    elevation={4}
                    p={3}
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
                <Stack
                    component={Paper}
                    elevation={4}
                    p={3}
                    flex={1}
                    sx={{
                        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    }}
                >
                    <CardHeader title="Traffic Sources" />
                    <TrafficSourcesChart data={TRAFFIC_SOURCES} />
                </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} alignItems="flex-start">
                <Stack
                    component={Paper}
                    elevation={4}
                    p={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        flex: 2,
                        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    }}
                >
                    <CardHeader
                        title="Latest Sales"
                        description="Track your latest sales performance."
                        action={
                            <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
                                View All
                            </Button>
                        }
                    />
                    {/* Mobile: List view */}
                    {!mdUp ? (
                        <Stack
                            divider={<Divider />}
                            mx={-3}
                        >
                            {LATEST_SALES.map((sale) => (
                                <SalesItem
                                    key={sale.id}
                                    avatar={sale.avatar}
                                    name={sale.name}
                                    surname={sale.surname}
                                    packageName={sale.package.replace(' Package', '')}
                                    amount={sale.amount}
                                    date={new Date(sale.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                                    status={sale.status}
                                />
                            ))}
                        </Stack>
                    ) : (
                        /* Desktop: Table view */
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Customer</TableCell>
                                        <TableCell>Package</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell align="center">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {LATEST_SALES
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((sale) => (
                                            <TableRow
                                                key={sale.id}
                                                sx={{
                                                    '&:last-child td, &:last-child th': { border: 0 },
                                                    '&:hover': {
                                                        bgcolor: 'action.hover',
                                                    }
                                                }}
                                            >
                                                <TableCell>
                                                    <UserItem
                                                        avatar={sale.avatar}
                                                        name={sale.name}
                                                        surname={sale.surname}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {sale.package.replace(' Package', '')}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography variant="body2" fontWeight={600}>
                                                        ${sale.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {new Date(sale.date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Chip
                                                        label={sale.status.charAt(0).toUpperCase() + sale.status.slice(1)}
                                                        size="small"
                                                        sx={{
                                                            minWidth: 80,
                                                            fontWeight: 600,
                                                            bgcolor: sale.status === 'success' ? alpha(theme.palette.success.main, 0.12) :
                                                                sale.status === 'pending' ? alpha(theme.palette.warning.main, 0.12) :
                                                                    alpha(theme.palette.error.main, 0.12),
                                                            color: sale.status === 'success' ? theme.palette.success.main :
                                                                sale.status === 'pending' ? theme.palette.warning.main :
                                                                    theme.palette.error.main,
                                                            border: 'none',
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={LATEST_SALES.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={(event, newPage) => setPage(newPage)}
                                onRowsPerPageChange={(event) => {
                                    setRowsPerPage(parseInt(event.target.value, 10));
                                    setPage(0);
                                }}
                            />
                        </TableContainer>
                    )}
                </Stack>
                {mdUp && (
                    <Stack
                        component={Paper}
                        direction="column"
                        elevation={4}
                        p={3}
                        flex={1}
                        spacing={3}
                        sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                            boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '150px',
                                height: '150px',
                                background: `radial-gradient(circle, ${alpha(theme.palette.common.white, 0.1)} 0%, transparent 70%)`,
                                borderRadius: '50%',
                                transform: 'translate(30%, -30%)',
                            },
                        }}
                    >
                        <CardHeader
                            title="Meet Orbit AI Assistant"
                            description="Analyze your customer data with AI. Detect churn risk 40% earlier."
                            variant="contained"
                            sx={{
                                position: 'relative',
                                zIndex: 1,
                            }}
                        />
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{
                                width: 'fit-content',
                                textTransform: 'none',
                                bgcolor: 'background.paper',
                                color: 'primary.main',
                            }}
                        >
                            Start simulation
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
}
