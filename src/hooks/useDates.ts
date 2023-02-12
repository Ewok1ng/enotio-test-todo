import { useRef } from 'react';

export const useDates = () => {
    const today = useRef<string>(
        new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getUTCDate(),
        ).toISOString(),
    );
    const tomorrow = useRef<string>(
        new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getUTCDate() + 1,
        ).toISOString(),
    );

    return {
        today,
        tomorrow,
    };
};
