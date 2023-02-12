const API_KEY = process.env.REACT_APP_API_KEY;
const NEWS_API = `https://newsapi.org/v2/top-headlines?sources=bbc-news&sortBy=publishedAt&apiKey=${API_KEY}`;

type newsDataType = {
    articles: Array<NewsType>;
    status: string;
    totalResults: number;
};

type NewsType = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
};

export const fetchNews = async () => {
    const titles: string[] = [];

    const response = await fetch(NEWS_API);
    const data: newsDataType = await response.json();

    data.articles.forEach((item) => {
        titles.push(item.title);
    });

    return titles;
};
