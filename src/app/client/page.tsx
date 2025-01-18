"use client"

import React, { useEffect, useState } from 'react';
import client from '../scripts/sanityClient';

// Define the type for a single post
interface Post {
  _id: string;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts..."); // Log when the fetch starts
        const data = await client.fetch(`*[_type == "Food"]{_id, title, body}`);
        
        if (!data || data.length === 0) {
          throw new Error('No posts found');
        }

        console.log("Fetched data:", data); // Log the fetched data
        setPosts(data);
      } catch (error: any) {
        setError("Error fetching posts: " + (error.message || error));
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 h-auto w-full gap-6">
        {posts.map((post) => (
          <div key={post._id} className="relative p-4 border border-gray-200 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
