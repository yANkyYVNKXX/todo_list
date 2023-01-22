import {useQuery} from 'react-query';

import {getNews} from 'data/api/news/news.api';

import {getRandomNumber} from 'core/helpers';

const newsKey = 'news';

export const useRandomNews = (sources: string) => {
  const {data, ...rest} = useQuery<NewsModel>([newsKey, sources], () => getNews(sources), {
    select: (data) => ({
      ...data,
      articles: data.articles.filter((news, index) => index === getRandomNumber(data.articles.length)),
    }),
  });

  return {data: data?.articles[0], ...rest};
};
