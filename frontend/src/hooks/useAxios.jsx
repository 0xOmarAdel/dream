import { useState, useCallback } from "react";
import axiosApi from "../utils/axiosConfig";

const useAxios = (url, method, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const runAxios = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi.request({
        method: method || "GET",
        url,
        data: body,
      });
      setData(response.data);
    } catch (error) {
      setError(!!error);
    } finally {
      setLoading(false);
    }
  }, [method, url, body]);

  return { runAxios, data, loading, error };
};

export default useAxios;
