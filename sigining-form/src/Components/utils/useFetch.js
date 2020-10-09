import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error, isLoading };
};

export default useFetch;
