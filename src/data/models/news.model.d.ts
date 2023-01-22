declare type NewsModel = {
  articles: NewsType[];
};

declare type NewsType = {
  author: string;
  publishedAt: string;
  content: string;
};
