import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
    // console.log(data);
  };
  // puede tener funciones asincronas pero en su collback
  //no puede poner que es asincrono
  useEffect(() => {
    getFetch();
  }, [url]);
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
