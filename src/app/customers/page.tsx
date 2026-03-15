"use client";

import { Button, Chip, IconButton, InputAdornment, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material";
import { EllipsisVerticalIcon, FunnelX, SearchIcon } from "lucide-react";
import { useState } from "react";
import UserItem from "../components/UserItem";
import { CUSTOMERS } from "@/constants/customers";

export default function CustomersPage() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [planFilter, setPlanFilter] = useState("all");

    const filteredCustomers = CUSTOMERS.filter((customer) => {
        const query = searchQuery.toLowerCase();
        const fullName = `${customer.name} ${customer.surname}`.toLowerCase();

        const matchesSearch = fullName.includes(query) || customer.company.toLowerCase().includes(query);
        const matchesStatus = statusFilter === "all" || customer.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesPlan = planFilter === "all" || customer.plan.toLowerCase() === planFilter.toLowerCase();

        return matchesSearch && matchesStatus && matchesPlan;
    });

    const hasActiveFilters = searchQuery !== "" || statusFilter !== "all" || planFilter !== "all";

    const clearAllFilters = () => {
        setSearchQuery("");
        setStatusFilter("all");
        setPlanFilter("all");
        setPage(0);
    };

    return (
        <Stack spacing={3}>
            <Stack spacing={0.5}>
                <Typography variant="h5" fontWeight={700}>
                    Customers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Manage your customer relationships and track engagement metrics.
                </Typography>
            </Stack>

            <Stack
                component={Paper}
                elevation={4}
                p={3}
                flex={1}
                spacing={3}
                sx={{
                    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                }}
            >
                <Stack direction="row" spacing={2}>
                    <TextField
                        fullWidth
                        placeholder="Search customers"
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setPage(0);
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setPage(0);
                        }}
                        size="small"
                        variant="outlined"
                    >
                        <MenuItem value="all">All Status</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                    <Select
                        value={planFilter}
                        onChange={(e) => {
                            setPlanFilter(e.target.value);
                            setPage(0);
                        }}
                        size="small"
                        variant="outlined"
                    >
                        <MenuItem value="all">All Plans</MenuItem>
                        <MenuItem value="basic">Basic</MenuItem>
                        <MenuItem value="pro">Pro</MenuItem>
                        <MenuItem value="enterprise">Enterprise</MenuItem>
                    </Select>

                </Stack>
                {hasActiveFilters && (
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                        <Typography variant="subtitle2">Filters:</Typography>
                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" flexGrow={1}>
                            {searchQuery && (
                                <Chip
                                    label={`Search: "${searchQuery}"`}
                                    size="small"
                                    onDelete={() => { setSearchQuery(''); setPage(0); }}
                                    sx={{ bgcolor: 'white', border: '1px solid #E2E8F0' }}
                                />
                            )}

                            {statusFilter !== 'all' && (
                                <Chip
                                    label={`Status: ${statusFilter === 'active' ? 'Active' : 'Inactive'}`}
                                    size="small"
                                    onDelete={() => { setStatusFilter('all'); setPage(0); }}
                                    sx={{ bgcolor: 'white', border: '1px solid #E2E8F0' }}
                                />
                            )}

                            {planFilter !== 'all' && (
                                <Chip
                                    label={`Plan: ${planFilter.charAt(0).toUpperCase() + planFilter.slice(1)}`}
                                    size="small"
                                    onDelete={() => { setPlanFilter('all'); setPage(0); }}
                                    sx={{ bgcolor: 'white', border: '1px solid #E2E8F0' }}
                                />
                            )}

                            <Button
                                size="small"
                                color="error"
                                onClick={clearAllFilters}
                                startIcon={<FunnelX size={16} />}
                                sx={{ ml: 'auto', fontSize: '0.75rem', py: 0.5 }}
                            >
                                Clear Filters
                            </Button>
                        </Stack>
                    </Stack>
                )}
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Customer</TableCell>
                                <TableCell>Company</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Subscription Plan</TableCell>
                                <TableCell>Date of Registration</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                filteredCustomers
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((customer) => (
                                        <TableRow key={customer.id}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 },
                                                '&:hover': {
                                                    bgcolor: 'action.hover',
                                                }
                                            }}
                                        >
                                            <TableCell>
                                                <UserItem
                                                    avatar={customer.avatar}
                                                    name={customer.name}
                                                    surname={customer.surname}
                                                />
                                            </TableCell>
                                            <TableCell>{customer.company}</TableCell>
                                            <TableCell>{customer.status}</TableCell>
                                            <TableCell>{customer.plan}</TableCell>
                                            <TableCell>{customer.registrationDate}</TableCell>
                                            <TableCell>
                                                <IconButton>
                                                    <EllipsisVerticalIcon size={16} />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                            }
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={filteredCustomers.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={(event, newPage) => setPage(newPage)}
                        onRowsPerPageChange={(event) => {
                            setRowsPerPage(parseInt(event.target.value, 10));
                            setPage(0);
                        }}
                        sx={{
                            '.MuiTablePagination-selectLabel': { order: 1 },
                            '.MuiTablePagination-input': { order: 2 },
                            '.MuiTablePagination-spacer': { order: 3 },
                            '.MuiTablePagination-displayedRows': { order: 4 },
                            '.MuiTablePagination-actions': { order: 5 },
                        }}
                    />
                </TableContainer>
            </Stack>
        </Stack>
    );
}