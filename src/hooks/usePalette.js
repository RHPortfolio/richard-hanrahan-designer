import { useState, useEffect } from 'react';

export default function usePalette(imageSRC) {
  const [palette, setPalette] = useState({});

  useEffect(() => {

    const options = {method: 'GET'};
    const adjustedURL = imageSRC+'&palette=json'

    fetch(adjustedURL, options)
      .then(response => response.json())
      .then(response => setPalette(response))
      .catch(err => console.error(err));

  }, [imageSRC])

  return palette
}
