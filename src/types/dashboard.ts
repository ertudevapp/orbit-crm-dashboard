/**
 * Type definitions for dashboard entities
 */

export type SalesStatus = 'success' | 'pending' | 'failed';

export interface SalesData {
    id: number;
    name: string;
    surname: string;
    avatar: string;
    amount: number;
    package: string;
    date: string;
    status: SalesStatus;
}

