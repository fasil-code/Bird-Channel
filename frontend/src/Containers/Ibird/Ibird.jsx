import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import images from '../../constants/images'
import "./Ibird.css"
function Ibird() {
  return (
    <div>
<Navbar/>
<div className="  img-bird  ">
<div className='bird-img'>
<img className='ibird-img' src={images.sliderb}></img>
</div>
<div className="mid">

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
<source src="horse.mp3" type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>
</div> 
  </div>

</div>
 
</div>
<Footer/>

    </div>
  )
}

export default Ibird