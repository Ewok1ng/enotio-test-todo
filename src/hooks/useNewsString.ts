import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchNews } from '../api/fetchData';

export const useNewsString = () => {
    const [newsString, setNewsString] = useState('');
    const { isLoading } = useQuery('news', fetchNews, {
        onSuccess(data) {
            setNewsString(data.join(' | '));
        },
    });

    return {
        isLoading,
        newsString,
    };
};
