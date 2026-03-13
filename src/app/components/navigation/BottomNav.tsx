'use client'

import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material"
import { MOBILE_MENU } from "./constant"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BottomNav = () => {
    const theme = useTheme()
    const pathname = usePathname()
    const leftItems = MOBILE_MENU.slice(0, 3)
    const rightItems = MOBILE_MENU.slice(3, 6)
    const barBg = theme.palette.background.paper

    return (
        <Box
            component="nav"
            role="navigation"
            aria-label="Mobile navigation"
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000, height: 64 }}
        >
            {/* Bar background with stable CSS notch - never distorts */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // Radial gradient creates a perfect circle cutout at top-center
                    // This is resolution/width independent - always a perfect circle
                    background: `radial-gradient(circle 36px at 50% 0%, transparent 35px, ${barBg} 36px)`,
                    boxShadow: '0px -3px 10px rgba(0,0,0,0.06)',
                }}
            />

            {/* Floating center logo */}
            <Box
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: -28,
                    transform: 'translateX(-50%)',
                    zIndex: 1002
                }}
            >
                <IconButton
                    aria-label="Orbit CRM Home"
                    sx={{
                        width: 56,
                        height: 56,
                        bgcolor: 'primary.main',
                        '&:hover': { bgcolor: 'primary.dark' },
                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.18)',
                    }}
                >
                    <Box
                        sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            bgcolor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Box component="span" sx={{ fontSize: 20, fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>
                            O
                        </Box>
                    </Box>
                </IconButton>
            </Box>

            {/* Navigation items */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    px: 2,
                    pt: 1
                }}
            >
                {/* Left 3 items */}
                <Stack direction="row" flex={1} justifyContent="space-evenly" sx={{ maxWidth: '42%' }}>
                    {leftItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                passHref
                                style={{ textDecoration: 'none' }}
                            >
                                <Stack
                                    component="button"
                                    aria-label={item.label}
                                    aria-current={isActive ? 'page' : undefined}
                                    sx={{
                                        alignItems: 'center',
                                        gap: 0.3,
                                        cursor: 'pointer',
                                        background: 'none',
                                        border: 'none',
                                        padding: 1,
                                        color: isActive ? 'primary.main' : 'text.secondary',
                                        transition: 'color 0.2s',
                                        '&:hover': {
                                            color: 'primary.main'
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                            outlineOffset: 2,
                                            borderRadius: 1
                                        }
                                    }}
                                >
                                    <item.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                                    <Typography
                                        variant="caption"
                                        fontSize={9}
                                        fontWeight={isActive ? 600 : 400}
                                        color="inherit"
                                    >
                                        {item.label}
                                    </Typography>
                                </Stack>
                            </Link>
                        )
                    })}
                </Stack>

                {/* Center spacer */}
                <Box sx={{ width: 80, flexShrink: 0 }} />

                {/* Right 3 items */}
                <Stack direction="row" flex={1} justifyContent="space-evenly" sx={{ maxWidth: '42%' }}>
                    {rightItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                passHref
                                style={{ textDecoration: 'none' }}
                            >
                                <Stack
                                    component="button"
                                    aria-label={item.label}
                                    aria-current={isActive ? 'page' : undefined}
                                    sx={{
                                        alignItems: 'center',
                                        gap: 0.3,
                                        cursor: 'pointer',
                                        background: 'none',
                                        border: 'none',
                                        padding: 1,
                                        color: isActive ? 'primary.main' : 'text.secondary',
                                        transition: 'color 0.2s',
                                        '&:hover': {
                                            color: 'primary.main'
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                            outlineOffset: 2,
                                            borderRadius: 1
                                        }
                                    }}
                                >
                                    <item.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                                    <Typography
                                        variant="caption"
                                        fontSize={9}
                                        fontWeight={isActive ? 600 : 400}
                                        color="inherit"
                                    >
                                        {item.label}
                                    </Typography>
                                </Stack>
                            </Link>
                        )
                    })}
                </Stack>
            </Stack>
        </Box>
    )
}

export default BottomNav