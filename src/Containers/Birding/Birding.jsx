import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer';
import YoutubeEmbed from "../../components/Video/Video"
function Birding() {
  return (
  
  
  <div>
<Navbar />
<div className='app__vd' >
<YoutubeEmbed embedId="rokGy0huYEA" />
<YoutubeEmbed embedId="rokGy0huYEA" /><YoutubeEmbed embedId="rokGy0huYEA" />
<YoutubeEmbed embedId="rokGy0huYEA" />
<YoutubeEmbed embedId="rokGy0huYEA" />
<YoutubeEmbed embedId="rokGy0huYEA" />
</div>
<Footer />
  </div>
  );
}

export default Birding;
