'use client'

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import NextAppDirEmotionCacheProvider from './EmotionCache';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5B47FB',
            light: '#EBE8FF',
        },
        text: {
            primary: '#1E293B',
            secondary: '#64748B',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        success: {
            lighter: '#D3FCD2',
            light: '#77ED8B',
            main: '#22C55E',
            dark: '#118D57',
            darker: '#065E49',
            contrastText: '#ffffff',
        },
        info: {
            lighter: '#CAFDF5',
            light: '#61F3F3',
            main: '#00B8D9',
            dark: '#006C9C',
            darker: '#003768',
            contrastText: '#FFFFFF',
        },
        warning: {
            lighter: '#FFF5CC',
            light: '#FFD666',
            main: '#FFAB00',
            dark: '#B76E00',
            darker: '#7A4100',
            contrastText: '#1C252E',
        },
        error: {
            lighter: '#FFE9D5',
            light: '#FFAC82',
            main: '#FF5630',
            dark: '#B71D18',
            darker: '#7A0916',
            contrastText: '#FFFFFF',
        },
    },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}