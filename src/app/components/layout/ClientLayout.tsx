'use client';

import { Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import BottomNav from "../navigation/BottomNav";

interface ClientLayoutProps {
    children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack direction="row" sx={{ height: '100vh', overflow: 'hidden' }}>
            {!mdDown && <Sidebar />}
            <Stack component="main" flex={1} sx={{ minWidth: 0, height: '100vh', overflow: 'auto' }}>
                <Header />
                <Stack bgcolor="background.default" flex={1}>
                    <Container maxWidth="xl" sx={{ py: 3, pb: mdDown ? '96px' : 3 }}>
                        {children}
                    </Container>
                </Stack>
            </Stack>
            {mdDown && <BottomNav />}
        </Stack>
    );
}
