import React from 'react';
import Card from "../../components/Card/Card"
import "./s.css"
import { Link } from 'react-router-dom';
import images from '../../constants/images';

function Cardall() {
  return (
  
     <div className=' app__bg ap__card'>
 <Link 
 to="/bird"
 >
 <Card 

title="Find Birds"
content="Explore. Learn. Teach. Share. We have dozens of ways for you to be a part of our mission to study and protect birds"
image={images.owl}
/>
</Link>
<Link
to="/conservation"
>
<Card 
tag="Conservation"
title="Conserving Birds"
content="Learn the science of creating home for birds.
Birds are indicators of environment.If they are in trouble, we soon all will be in trouble
"
image={images.sp}
/>
</Link>
<Link
to="birding"
>
<Card 
tag="Birding"
title="Birding Basics"
content="Top tips for becoming a Ladakhi Birder or wildlife guide.
Adopt the pace of Nature her secret is patience. Birding after all is a game."
image={images.sps}
/> 
</Link>

  </div>

  );
}

export default Cardall;
