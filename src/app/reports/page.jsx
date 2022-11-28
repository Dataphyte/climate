'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/hero';
import trimmer from '@/utils/trimmer';
import React, { useEffect } from 'react';
import Footer from '@/components/footer';
import useReports from '@/hooks/sanity-hooks/useReports';

const Page = () => {
  const posts = useReports();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className='w-full min-h-screen'>
      <Hero
        content={
          <>
            View <b>Climate</b> <br />
            reports
          </>
        }
        cta='visit Dataphyte'
        ctaLink='https://dataphyte.com'
      />

      <main className='w-full h-auto px-3 md:px-10 lg:px-20 flex flex-col gap-2'>
        <div className='relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
          <div className='absolute inset-0'>
            <div className='h-1/3 sm:h-2/3' />
          </div>
          <div className='relative mx-auto max-w-7xl'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                From the blog
              </h2>
              <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
                Follow the reports from our main climate stories.
              </p>
            </div>
            <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
              {posts &&
                posts.map((post) => (
                  <div
                    key={post.title}
                    className='flex flex-col overflow-hidden rounded-lg shadow-md group hover:shadow-lg duration-150 ease-out'
                  >
                    <div className='flex-shrink-0 h-48 w-full relative '>
                      <Image
                        className='object-cover shadow'
                        src={post.imageUrl}
                        fill
                        sizes='(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw'
                        alt={post.title}
                      />
                    </div>
                    <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                      <div className='flex-1'>
                        <Link
                          href={post.link}
                          className='mt-2 block'
                          target='_blank'
                        >
                          <p className='text-xl font-semibold text-gray-900 duration-150 ease-out hover:text-main-color'>
                            {post.title}
                          </p>
                          <p className='mt-3 text-base text-gray-500 font-light'>
                            {trimmer(post.description)}
                          </p>
                        </Link>
                      </div>
                      <div className='mt-6 flex items-center'>
                        <div className='ml-3'>
                          <p className='text-sm font-medium text-gray-900'>
                            {post.author}
                          </p>
                          <div className='flex space-x-1 text-sm text-gray-500'>
                            <time>{post.publish_date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
