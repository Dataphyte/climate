'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/utils/sanity-client';

// ======= Define query -->
const query = '*[_type == "resources-state"]';

const useResources = async () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    client.fetch(query).then((res) => setResult(res));
  }, []);

  return result;
};

export default useResources;
