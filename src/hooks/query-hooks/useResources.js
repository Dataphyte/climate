import React from 'react';
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';

const useResources = () => {
  const { data, error } = useSWR(
    'https://climate.sanity.studio',
    new fetcher().GET
  );
  return data;
};

export default useResources;
