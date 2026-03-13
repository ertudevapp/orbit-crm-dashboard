import { Box, Paper, Stack, Typography } from "@mui/material";
import { SettingsIcon } from "lucide-react";

export default function SettingsPage() {
    return (
        <Stack spacing={3}>
            <Stack spacing={0.5}>
                <Typography variant="h5" fontWeight={700}>
                    Settings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Configure your application preferences and account settings.
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
                        bgcolor: 'warning.main',
                        color: 'warning.contrastText',
                        mb: 2,
                    }}
                >
                    <SettingsIcon size={32} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Settings Panel Coming Soon
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth={400}>
                    Customizable settings and preferences will be available here to personalize your experience.
                </Typography>
            </Paper>
        </Stack>
    );
}