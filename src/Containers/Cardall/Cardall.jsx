import React from 'react';
import Card from "../../components/Card/Card"
import "./s.css"
import { Link } from 'react-router-dom';
function Cardall() {
  return (
  
     <div className=' app__bg ap__card'>
 <Link 
 to="/bird"
 >
 <Card 

title="Find Birds"
content=""
imag=""
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

/> 
</Link>

  </div>

  );
}

export default Cardall;
