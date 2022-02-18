import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import images from '../../constants/images'
import ReactPaginate from 'react-paginate';
import Pagination from '../../components/Pagi/Pagi'
import "./Ibird.css"
import Posts from '../Post/Post'
import axios from "axios"
function Ibird() {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (

    <div>
<Navbar/>
<div className="  img-bird  ">
<div className='bird-img'>
<img className='ibird-img' src={images.sliderb}></img>
</div>
<div className="mide">

</div>
<div className='text-end'>
  <h1>Bird Name</h1>
  <p>
    Helloo wdefrtgyhtrewer vertyjhtgefdftrgyh werjmjrfthn wertghr4
  swdeftghy sedrfghjnmjhgfds sderftgyhjhgfdeswsdfbhnjgfedws
  </p>
  <div className="det-ails">

      <table>
   
        <tr>
            <td>Food</td>
            <td>Grains  Worms  Wheat  Beans</td>
         
        </tr>
        <tr>
           
            <td>Prey</td>
            <td>Grains  Worms  Wheat  Beans</td>
        </tr>
        <tr>
           
            <td>Habitat</td>
            <td>Grains  Worms  Wheat  Beans</td>
            
        </tr>
    </table>

    <div className="audiot">

<audio controls autoplay >
<source src={images.ar} type="audio/ogg"/>

Your browser does not support the audio element.
</audio>
</div> 
  </div>

</div>
 
</div>

<div >
<Posts posts={currentPosts} loading={loading} />
</div>
    <div className="pagenation">
      <Pagination
    
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    

</div>


<Footer/>

    </div>
  )
}

export default Ibird