import { useState, useCallback } from "react";
import axios from "axios";
import queryString from "query-string";

const useAxios = (url, method = "GET", body = null, searchParams = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const [error, setError] = useState(false);

  const runAxios = useCallback(async () => {
    try {
      const localToken = localStorage.getItem("token");

      setLoading(true);
      setIsExecuting(true);
      
      const response = await axios({
        method: method,
        url: `http://localhost:5000/api/v1${url}`,
        data: body,
        params: queryString.parse(searchParams),
        headers: {
          "Content-Type": "application/json",
          ...(localToken && { Authorization: `Bearer ${localToken}` }),
        },
      });

      setData(response.data);
    } catch (error) {
      setError(!!error);
    } finally {
      setLoading(false);
      setIsExecuting(false);
    }
  }, [method, url, searchParams, body]);

  return { runAxios, data, loading, isExecuting, error };
};

export default useAxios;
