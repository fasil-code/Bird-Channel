import React from 'react';
import Card2 from '../../components/Card2/Card2';
import "./Post.css"
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='bird_categ'>
      {posts.map(post => (
       <Card2 image={"http://"+window.location.hostname+":3001/"+post.u_image.slice(10)} title={ post.u_photographer} 
       location={post.u_location}
        date={post.u_date }
        content={post.u_desc}/>
      ))}
    </ul>
  );
};

export default Posts;