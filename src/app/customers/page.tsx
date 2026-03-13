import { Box, Paper, Stack, Typography } from "@mui/material";
import { Users2Icon } from "lucide-react";

export default function CustomersPage() {
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
                        bgcolor: 'info.main',
                        color: 'info.contrastText',
                        mb: 2,
                    }}
                >
                    <Users2Icon size={32} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Customer Management Coming Soon
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth={400}>
                    Advanced customer relationship management tools are in development to help you better serve your clients.
                </Typography>
            </Paper>
        </Stack>
    );
}