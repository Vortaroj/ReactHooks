import {useEffect, useState} from 'react';

export const useFetch = (url) => {
  const [dataState, setDataState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setDataState({
      ...dataState,
      isLoading: true,
    });

    const res = await fetch(url);
    const data = await res.json();

    setDataState({
      data: data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: dataState.data,
    hasError: dataState.hasError,
    isLoading: dataState.isLoading,
  };
};
