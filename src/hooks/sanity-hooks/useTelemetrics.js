'use client';

import { useEffect, useState } from 'react';
import { client } from '@/utils/sanity-client';

// ======= Define query -->
const query = '*[_type == "telemetrics"]{ _id, title, tag, value, people }';

const useTelemetrics = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    client.fetch(query).then((res) => setResult(res));
  }, []);

  return result;
};

export default useTelemetrics;
