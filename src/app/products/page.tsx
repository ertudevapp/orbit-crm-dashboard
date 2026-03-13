import { Box, Paper, Stack, Typography } from "@mui/material";
import { PackageIcon } from "lucide-react";

export default function ProductsPage() {
    return (
        <Stack spacing={3}>
            <Stack spacing={0.5}>
                <Typography variant="h5" fontWeight={700}>
                    Products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Manage your product catalog, inventory, and pricing.
                </Typography>
            </Stack>

            <Paper
                sx={{
                    p: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: 1,
                    borderColor: 'divider',
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'success.main',
                        color: 'success.contrastText',
                        mb: 2,
                    }}
                >
                    <PackageIcon size={32} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Product Management Coming Soon
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth={400}>
                    Comprehensive product management features are being developed to streamline your inventory operations.
                </Typography>
            </Paper>
        </Stack>
    );
}