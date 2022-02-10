import React from "react";
import PropTypes from "prop-types";
import './Video1.css'
const YoutubeEmbed = ({ embedId }) => (
 
  <div className="video-responsive ">
    <iframe
      width="300"
      height="600px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
   <h3>hello</h3> 
   <p className="vd__p p__opensans">lorem gfghjkhtgh</p>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;