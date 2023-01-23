import {createContext, Dispatch, ReactNode, SetStateAction, useContext} from 'react';

type NewsContextState = {
  newsEnable: boolean;
  setNewsEnable: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
} & NewsContextState;

const NewsContext = createContext<NewsContextState>({} as NewsContextState);

export const useNewsContext = () => useContext(NewsContext);

export const NewsContextProvider = ({children, newsEnable, setNewsEnable}: Props) => {
  return <NewsContext.Provider value={{newsEnable, setNewsEnable}}>{children}</NewsContext.Provider>;
};
