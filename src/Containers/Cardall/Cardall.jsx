import React from 'react';
import Card from "../../components/Card/Card"
import "./s.css"
function Cardall() {
  return (
  
     <div className=' app__bg ap__card'>
 
 <Card 
tag="Finding"
title="Find Birds"
content=""

/>
<Card 
tag="Conservation"
title="Conserving Birds"
content="Learn the science of creating healthy home for birds.
Birds are indicators of environment.If they are in trouble, we soon all will be in trouble
"

/><Card 
tag="Birding"
title="Birding Basics"
content="Top tips for becoming a Ladakhi Birder or wildlife guide.
Adopt the pace of Nature her secret is patience. Birding after all is a game."

/> 

  </div>

  );
}

export default Cardall;
