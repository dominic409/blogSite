import Head from 'next/head'
import Image from 'next/image'
// import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

const Home = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8 w-11/12">
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


// Fetch data at build time
export async function getStaticProps() {

  const posts = (await getPosts()) || [];

  // console.log(posts)
  return {
    props: { posts },
  };
}