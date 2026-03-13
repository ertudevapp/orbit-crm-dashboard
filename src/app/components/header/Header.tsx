'use client'

import { Avatar, Box, Breadcrumbs, ClickAwayListener, Divider, IconButton, InputAdornment, Link, Stack, TextField, Typography, useMediaQuery } from "@mui/material"
import { BellIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material";



const Header = () => {

    const theme = useTheme();
    const pathname = usePathname();
    const headerRef = useRef<HTMLDivElement>(null);

    const pathSegments = pathname.split('/').filter(segment => segment);
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollContainer = headerRef.current?.parentElement;
        if (!scrollContainer) return;

        const handleScroll = () => {
            setIsScrolled(scrollContainer.scrollTop > 8);
        };

        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    const bgScrolled = theme.palette.mode === 'dark'
        ? 'rgba(30, 30, 30, 0.72)'
        : 'rgba(255, 255, 255, 0.72)';

    return (
        <Stack
            ref={headerRef}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            py={{ xs: 1.5, md: 2 }}
            px={{ xs: 2, md: 3 }}
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1100,
                bgcolor: isScrolled ? bgScrolled : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: 1,
                borderColor: isScrolled ? 'transparent' : 'divider',
                boxShadow: isScrolled
                    ? '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)'
                    : 'none',
                minHeight: { xs: 64, md: 72 },
                flexShrink: 0,
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
            }}
        >
            <Box>
                {mdUp ? (
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            sx={{ cursor: 'pointer' }}
                        >
                            Home
                        </Link>
                        {pathSegments.map((segment, index) => {
                            const href = '/' + pathSegments.slice(0, index + 1).join('/');
                            const isLast = index === pathSegments.length - 1;

                            const label = segment.charAt(0).toUpperCase() + segment.slice(1);

                            return isLast ? (
                                <Typography key={segment} color="text.primary">
                                    {label}
                                </Typography>
                            ) : (
                                <Link
                                    key={segment}
                                    underline="hover"
                                    color="inherit"
                                    href={href}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </Breadcrumbs>
                ) : (
                    <Typography variant="h6" component="h1" fontWeight={700}>
                        {pathSegments.length > 0
                            ? pathSegments[pathSegments.length - 1].charAt(0).toUpperCase() + pathSegments[pathSegments.length - 1].slice(1)
                            : 'Dashboard'}
                    </Typography>
                )}
            </Box>

            {/* Right side: Actions */}
            <Stack direction="row" alignItems="center" spacing={{ xs: 1, md: 3 }}>

                {/* Search Bar - Responsive */}
                {mdUp ? (
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon size={16} />
                                    </InputAdornment>
                                )
                            }
                        }}
                        sx={{
                            borderRadius: 8,
                            bgcolor: 'background.paper',
                            '& .MuiInputBase-root': {
                                borderRadius: 8,
                            },
                            background: theme.palette.background.default,
                            width: 240
                        }}
                    />
                ) : (
                    <ClickAwayListener onClickAway={() => setMobileSearchOpen(false)}>
                        <Stack alignItems="center" spacing={1} position="relative">
                            <TextField
                                variant="standard"
                                placeholder="Search..."
                                size="small"
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton
                                                    size="small"
                                                    onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                                                    aria-label="Search"
                                                >
                                                    <SearchIcon size={18} />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        disableUnderline: !mobileSearchOpen
                                    }
                                }}
                                sx={{
                                    width: mobileSearchOpen ? 200 : 40,
                                    transition: 'width 0.3s ease-in-out',
                                    '& .MuiInput-root': {
                                        backgroundColor: 'transparent',
                                        paddingLeft: 0,
                                    },
                                    '& .MuiInput-input': {
                                        opacity: mobileSearchOpen ? 1 : 0,
                                        transition: 'opacity 0.2s ease-in-out',
                                        cursor: mobileSearchOpen ? 'text' : 'default',
                                    }
                                }}
                            />
                        </Stack>
                    </ClickAwayListener>
                )}

                <IconButton aria-label="Notifications">
                    <BellIcon size={20} />
                </IconButton>

                <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center' }} />

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar sx={{ width: 32, height: 32 }} src="/avatar.png" alt="Marty McFly" />
                    {mdUp && (
                        <Stack>
                            <Typography variant="body2" fontWeight={600}>Marty McFly</Typography>
                            <Typography variant="caption">Predictive Analytics</Typography>
                        </Stack>
                    )}
                    <IconButton size="small" aria-label="User menu">
                        <ChevronDownIcon size={16} />
                    </IconButton>
                </Stack>
            </Stack >
        </Stack >
    )
}

export default Header