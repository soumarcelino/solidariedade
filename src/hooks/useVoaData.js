import {useEffect, useState} from 'react';

const VOA_URL = 'https://voaa-extractor.herokuapp.com/';

export default function () {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const rest = await fetch(VOA_URL);
      const result = await rest.json();
      setIsLoading(false);
      setData(result);
    })();
  }, []);

  return {data, isLoading};
}
