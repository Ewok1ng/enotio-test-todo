export function compareDates(date1: string, date2: string) {
    return new Date(date1).getTime() === new Date(date2).getTime();
}

export function formatDate(date: string) {
    return new Date(date).toLocaleString('en-GB', {
        month: '2-digit',
        day: '2-digit',
    });
}
