import {api} from 'core/api';

export const getNews = async (sources: string): Promise<NewsModel> => {
  try {
    const {data} = await api.get<NewsModel>(`?sources=${sources}&apiKey=${process.env.REACT_APP_API_KEY}`);

    return data;
  } catch (error) {
    throw error;
  }
};
