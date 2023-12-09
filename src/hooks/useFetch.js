import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/constants";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    axios
      .get(url, {
        baseURL: BASE_URL,
      })
      .then((res) => {
        setLoading(false);
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
