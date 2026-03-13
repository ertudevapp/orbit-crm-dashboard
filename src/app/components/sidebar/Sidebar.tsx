'use client'

import { Box, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { ChevronLeft, ChevronRight, CircleIcon } from "lucide-react"
import MenuSection from "./MenuSection"
import { MAIN_MENU, MANAGEMENT_MENU, SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from "./constants"
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Sidebar = () => {

    const theme = useTheme();
    const pathname = usePathname();
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const handleMenuClick = (href: string) => {
        router.push(href);
    };

    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    useEffect(() => {
        if (mdDown) {
            setIsCollapsed(true);
        }
    }, [mdDown]);

    return (
        <Stack
            component="nav"
            role="navigation"
            aria-label="Main sidebar navigation"
            sx={{
                width: isCollapsed ? `calc(${SIDEBAR_COLLAPSED_WIDTH}px + 16px)` : `calc(${SIDEBAR_WIDTH}px + 16px)`,
                borderRight: 1,
                borderColor: 'divider',
                height: '100vh',
                transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'visible',
                position: 'relative',
                zIndex: 1100,
            }}
            spacing={1}
        >
            <Stack
                direction="row"
                alignItems="center"
                gap={1.5}
                p={3}
                sx={{
                    minHeight: 80,
                }}
            >
                <Stack direction="row" alignItems="center" gap={1.5}>
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 1,
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <CircleIcon style={{ color: theme.palette.common.white, width: 20 }} />
                    </Box>
                    {!isCollapsed && (
                        <Typography
                            variant="h6"
                            fontWeight={700}
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                            }}
                        >
                            Orbit CRM
                        </Typography>
                    )}
                </Stack>
            </Stack>
            <IconButton
                onClick={toggleSidebar}
                size="small"
                sx={{
                    position: 'absolute',
                    top: 36,
                    right: 0,
                    transform: 'translateX(50%)',
                    zIndex: 1300,
                    border: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    opacity: 1,
                    '&:hover': {
                        bgcolor: 'grey.100',
                        opacity: 1,
                        '@media (hover: none)': {
                            bgcolor: 'background.paper',
                        }
                    }
                }}
            >
                {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </IconButton>
            <MenuSection
                title="Main Menu"
                items={MAIN_MENU}
                activeHref={pathname}
                onMenuClick={handleMenuClick}
                isCollapsed={isCollapsed}
            />
            <MenuSection
                title="Management"
                items={MANAGEMENT_MENU}
                activeHref={pathname}
                onMenuClick={handleMenuClick}
                isCollapsed={isCollapsed}
            />

        </Stack>
    )
}

export default Sidebar