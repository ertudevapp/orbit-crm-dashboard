'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to handle SSR hydration mismatches
 * Returns true once the component is mounted on the client side
 * 
 * Useful for components that depend on client-side only features
 * like window, localStorage, or libraries that require client-side rendering
 */
export function useMounted(): boolean {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}
