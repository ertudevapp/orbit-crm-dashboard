/**
 * Number formatting utilities
 */

/**
 * Format a number with localized formatting
 * @param value - The number to format
 * @param locale - The locale to use (default: 'en-US')
 * @returns Formatted string with 2 decimal places
 */
export const formatNumber = (value: number, locale: string = 'en-US'): string => {
    return value.toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

/**
 * Format currency value
 * @param value - The amount to format
 * @param currency - Currency code (default: 'USD')
 * @param locale - The locale to use (default: 'en-US')
 * @returns Formatted currency string
 */
export const formatCurrency = (
    value: number,
    currency: string = 'USD',
    locale: string = 'en-US'
): string => {
    return value.toLocaleString(locale, {
        style: 'currency',
        currency,
    });
};

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Format date in short format (e.g., "Feb 1")
 */
export const formatShortDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

/**
 * Format date in long format (e.g., "February 1, 2024")
 */
export const formatLongDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
};

/**
 * Remove " Package" suffix from package names
 */
export const stripPackageSuffix = (packageName: string): string => {
    return packageName.replace(' Package', '');
};
