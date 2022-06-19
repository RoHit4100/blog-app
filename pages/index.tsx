import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props{
  posts : (Post);
}


export default function Home({ posts }: Props) {
  
  console.log(posts);
  return ( 
  <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header /> 

      <div className="flex justify-between items-center bg-yellow-500 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is a place to write, read, and connect
          </h1>

          <h2>
            It's easy and free to post your thinking on any topic and connect with millions of readers.
          </h2>
        </div>

        <img className="hidden md:inline-flex h-32 lg:h-full"
         src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png"
          alt="" />


      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  description,
  mainImage,
  
  author ->{
  name, 
  image
},
}`;
  
const post = await sanityClient.fetch(query);

return {
  props: {
    post,
  },
}; 

};