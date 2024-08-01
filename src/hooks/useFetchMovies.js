import { useEffect, useState } from "react";

import instance from "../api/axios";

export default function useFetchMovies(endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const response = await instance.get(endpoint.url, {
          ...endpoint.options,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint]);

  return { isLoading, data, error };
}
