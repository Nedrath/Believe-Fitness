import { useState, useEffect } from "react";

const UseMyFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((response) => { 
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
      return () => abortCont.abort();
    }, [url]);
    
    error && console.log(error);

  return { data, isPending, error };
};

export default UseMyFetch;
