import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import images from '../../constants/images'
import ReactPaginate from 'react-paginate';
import {useParams} from 'react-router-dom';
import "./Ibird.css"

import Posts from '../Post/Post'
import axios from "axios"
import Container from '../../components/Container/Container'
function Ibird() {
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [birdData, setbirdData] = useState([]);
  
  const queryParams = new URLSearchParams(window.location.search)
  const b_id = queryParams.get("id")

  useEffect((props) => {
    axios.post("http://"+window.location.hostname+":3001/getbirddata",{
      b_id: b_id
    }).then((response)=>{
    setbirdData(response.data);
    })
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.post("http://"+window.location.hostname+":3001/getbirduploads", {b_id: b_id});
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
{
birdData.map((val, key) => {
  return(
<div className="img-bird">
<div className='bird-img'>


  <img className='ibird-img' src={"http://"+window.location.hostname+":3001/"+val.b_image.slice(10)}></img>



</div>
<div className="mide">

</div>

<div className='text-end'>

  
  <h1>{val.b_name}</h1>
  <p>
   {val.b_desc}
  </p>
  <div className="det-ails">

      <table>
   
        <tr>
            <td>Food</td>
            <td>{val.b_food}</td>
         
        </tr>
        <tr>
           
            <td>Prey</td>
            <td>{val.b_prey}</td>
        </tr>
        <tr>
           
            <td>Habitat</td>
            <td>{val.b_habitat}</td>
            
        </tr>
    </table>

    <div className="audiot">

<audio controls autoplay >
<source src={val.b_audio?"http://"+window.location.hostname+":3001/"+val.b_audio.slice(10):""} type="audio/ogg"/>

Your browser does not support the audio element.
</audio>

</div> 
<div className='pop-bt'>
<Container triggerText={triggerText} onSubmit={onSubmit} />
</div>
  </div>
  </div>




</div>
)}
)
}
<div >
<Posts posts={currentPosts} loading={loading} />
</div>
    <div className="pagenation">
      <nav>
      <ul className='pagination'>
          {(currentPage > 1)?
            <li key={currentPage-1} className='page-item'>
              <a onClick={() => paginate(currentPage-1)}  className='page-link'>
                Prev
              </a>
            </li>
          :
            <li className='page-item'>
              <a className='page-link'>
                Prev
              </a>
            </li>
          }

          {(currentPage < Math.ceil(posts.length / postsPerPage))?
            <li key={currentPage+1} className='page-item'>
              <a  onClick={() => paginate(currentPage+1)}  className='page-link'>
                Next
              </a>
            </li>
          :
            <li className='page-item'>
              <a className='page-link '>
                Next
              </a>
            </li>
          }
      </ul>
    </nav>
    

</div>


<Footer/>

    </div>
  )
}

export default Ibird