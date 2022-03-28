import { useEffect, useState } from "react";
import axios from "axios";

export default function useRequest(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { method } = options;

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const { data } = await axios({
          method: method || "GET",
          url,
        });
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error.response.data);
      }
    }

    getData();
  }, []);

  return {data, loading, error};
}
