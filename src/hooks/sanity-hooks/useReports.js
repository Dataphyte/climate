'use client';

import { useState, useEffect } from 'react';
import { client } from '@/utils/sanity-client';

const query =
  '*[_type == "reports"] | order(publish_date desc) {author, description, "imageUrl": image.asset -> url, title, publish_date, link}';

const useReports = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    client.fetch(query).then((res) => setResult(res));
  }, []);

  return result;
};

export default useReports;
