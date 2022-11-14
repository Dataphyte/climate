'use client';

import { useEffect, useState } from 'react';
import { client } from '@/utils/sanity-client';

// ======= Define query -->
const query =
  '*[_type == "resources-state"]{ state, no_of_lga, no_of_deaths, no_of_displaced, ref_link, lga_affected}';

const useResources = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    client.fetch(query).then((res) => setResult(res));
  }, []);

  return result;
};

export default useResources;
