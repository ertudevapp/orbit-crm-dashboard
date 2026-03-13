import { Box, Paper, Stack, Typography } from "@mui/material";
import { BarChart3Icon } from "lucide-react";

export default function AnalyticsPage() {
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
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        mb: 2,
                    }}
                >
                    <BarChart3Icon size={32} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Analytics Dashboard Coming Soon
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth={400}>
                    We&apos;re working on comprehensive analytics tools to help you gain deeper insights into your data.
                </Typography>
            </Paper>
        </Stack>
    );
}