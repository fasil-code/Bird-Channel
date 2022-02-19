import React from 'react';
import Card from '../../components/Card/Card';
import "./Post.css"
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='bird_categ'>
      {posts.map(post => (
       <Card image={"http://"+window.location.hostname+":3001/"+post.u_image.slice(10)} title={"Name: " + post.u_photographer} content={"Location: " + post.u_location + ", Date: " + post.u_date + ", Description: " + post.u_desc}/>
      ))}
    </ul>
  );
};

export default Posts;