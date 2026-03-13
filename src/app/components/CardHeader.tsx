import { Stack, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface CardHeaderProps {
    title: string;
    description?: string;
    variant?: "outlined" | 'contained';
    action?: React.ReactNode;
    sx?: SxProps<Theme>;
}

const CardHeader = ({ title, description, action, variant = 'outlined', sx }: CardHeaderProps) => {
    const textColor = variant === 'contained' ? 'common.white' : 'text.primary';

    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={4} sx={{ position: 'relative', zIndex: 1, ...sx }}>
            <Stack spacing={.5}>
                <Typography variant="h6" fontWeight={700} color={textColor}>
                    {title}
                </Typography>
                {description && (
                    <Typography variant="body2" color={variant === 'contained' ? 'common.white' : 'text.secondary'}>
                        {description}
                    </Typography>
                )}
            </Stack>
            {action}
        </Stack>
    );
};

export default CardHeader;