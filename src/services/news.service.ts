import {useQuery} from 'react-query';

import {getNews} from 'data/api/news/news.api';

const newsKey = 'news';

export const useRandomNews = (sources: string) => {
  return useQuery<NewsModel>([newsKey, sources], () => getNews(sources));
};
