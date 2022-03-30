import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  // Fetch data in useEffect and return it

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setError("");
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });

    // Clean up function for useEffect hook
    return () => {
      controller.abort();
    };
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
