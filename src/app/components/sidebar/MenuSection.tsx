'use client';

import { MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { type MenuItemData } from "./constants";
import { useState, MouseEvent } from 'react';

interface MenuSectionProps {
    title: string;
    items: MenuItemData[];
    activeHref: string;
    onMenuClick: (href: string) => void;
    isCollapsed?: boolean;
}

const MenuSection = ({ title, items, activeHref, onMenuClick, isCollapsed = false }: MenuSectionProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [hoveredLabel, setHoveredLabel] = useState<string>('');

    const handlePopoverOpen = (event: MouseEvent<HTMLElement>, label: string) => {
        setAnchorEl(event.currentTarget);
        setHoveredLabel(label);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setHoveredLabel('');
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <MenuList sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, }}>
                {!isCollapsed && (
                    <Typography
                        variant="caption"
                        px={2}
                        fontWeight={600}
                        color='text.secondary'
                        textTransform='uppercase'
                        letterSpacing={.5}
                    >
                        {title}
                    </Typography>
                )}
                {items.map((menu) => {
                    const Icon = menu.icon;
                    const isActive = activeHref === menu.href;

                    return (
                        <MenuItem
                            key={menu.id}
                            component="a"
                            href={menu.href}
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick(menu.href);
                            }}
                            onMouseEnter={isCollapsed ? (e) => handlePopoverOpen(e, menu.label) : undefined}
                            onMouseLeave={isCollapsed ? handlePopoverClose : undefined}
                            aria-current={isActive ? 'page' : undefined}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: isCollapsed ? 'center' : 'flex-start',
                                gap: 1.5,
                                py: 1.5,
                                px: isCollapsed ? 1 : 2,
                                borderRight: isActive ? '3px solid' : 'none',
                                borderRightColor: isActive ? 'primary.main' : 'transparent',
                                bgcolor: isActive ? 'primary.light' : 'transparent',
                                color: isActive ? 'primary.main' : 'text.secondary',
                                textDecoration: 'none',
                                '&:hover': {
                                    bgcolor: isActive ? 'primary.light' : 'action.hover'
                                }
                            }}
                        >
                            <Icon size={20} />
                            {!isCollapsed && (
                                <Typography variant="body2" fontWeight={isActive ? 600 : 400}>
                                    {menu.label}
                                </Typography>
                            )}
                        </MenuItem>
                    );
                })}
            </MenuList>
            {isCollapsed && (
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    sx={{
                        pointerEvents: 'none',
                        zIndex: 1300,
                    }}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    slotProps={{
                        paper: {
                            sx: {
                                px: 2,
                                py: 1,
                                ml: 1,
                                overflow: 'visible',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: -6,
                                    top: '50%',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    width: 12,
                                    height: 12,
                                    bgcolor: 'background.paper',
                                    boxShadow: '-2px 2px 4px -2px rgb(0 0 0 / 0.1)',
                                }
                            }
                        }
                    }}
                >
                    <Typography variant="body2" fontWeight={500}>
                        {hoveredLabel}
                    </Typography>
                </Popover>
            )}
        </>
    );
};

export default MenuSection;
