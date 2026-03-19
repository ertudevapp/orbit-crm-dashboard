'use client';

import { PRODUCTS } from "@/constants/products";
import { Box, Button, InputAdornment, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PackageIcon, Plus, SearchIcon } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {

    const theme = useTheme();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [planFilter, setPlanFilter] = useState('all');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredProducts = PRODUCTS.filter((product) => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.status.toLowerCase().includes(query) ||
            product.price.toString().includes(query) ||
            product.totalSales.toString().includes(query);
        const matchesStatus =
            statusFilter === 'all' || product.status.toLowerCase() === statusFilter;
        const matchesCategory =
            planFilter === 'all' || product.category === planFilter;
        return matchesSearch && matchesStatus && matchesCategory;
    });

    const hasActiveFilters = searchQuery !== "" || statusFilter !== "all" || planFilter !== "all";

    const clearAllFilters = () => {
        setSearchQuery("");
        setStatusFilter("all");
        setPlanFilter("all");
        setPage(0);
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredProducts.length) : 0;


    return (
        <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
                <Stack spacing={0.5}>
                    <Typography variant="h5" fontWeight={700}>
                        Products
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Manage your product catalog, inventory, and pricing.
                    </Typography>
                </Stack>
                <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 2 }} alignItems={{ xs: "flex-end", md: "center" }} flex={1} justifyContent="flex-end">
                    <Button variant="contained" size="small" startIcon={mdUp ? <Plus size={12} /> : null}>
                        Add Product
                    </Button>
                </Stack>
            </Stack>
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
                <Stack direction="row" spacing={2}>
                    <TextField
                        fullWidth
                        placeholder="Search products"
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
                        <MenuItem value="all">All Categories</MenuItem>
                        <MenuItem value="Subscription">Subscription</MenuItem>
                        <MenuItem value="Add-ons">Add-ons</MenuItem>
                        <MenuItem value="Service">Service</MenuItem>
                    </Select>

                </Stack>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Total Sales</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.status}</TableCell>
                                    <TableCell>{product.totalSales}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredProducts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(event) => {
                        setRowsPerPage(parseInt(event.target.value, 10));
                        setPage(0);
                    }}
                />
            </Stack>
        </Stack>
    );
}