import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import images from '../../constants/images'
import "./Birds.css"
import Card from '../../components/Card/Card'
function Birds() {
  return (
    <div className="app__bird">
<Navbar/>
<div className='header '>
<h1 className='centered'>Find a Bird of Category</h1>
<img src={images.wood2}></img>
</div>
<div className='bird'>
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
</div>
<Footer/>


    </div>

  )
}

export default Birds