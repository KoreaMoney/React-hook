import { useEffect, useState } from "react";

export function useFetch(BASEURL, initialType) {
  const [data, setData] = useState(null);

  const apiUrl = (type) => {
    fetch(BASEURL + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    apiUrl(initialType);
  }, []);

  return {
    data,
    apiUrl,
  };
}
