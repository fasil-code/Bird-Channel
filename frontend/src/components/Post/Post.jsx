import React from 'react';
import Card from '../Card/Card';
import "./Post.css"
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='bird_categ'>
      {posts.map(post => (
       <Card title={post.title}/>
      
      ))}
    </ul>
  );
};

export default Posts;