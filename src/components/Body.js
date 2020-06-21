import React from 'react'

import Image from '../../assets/video_call.png'

export default function Infos (){
  return(
<>
<section className="body-box">
<div className="image-container">
  <img src={Image} alt=""/>
</div>
<div className="body-container">
 <h3>Alavanque seu negócio com um</h3>
 <h1>Website incrível</h1>

<button> Solicitar orçamento</button>
</div>
</section>
 
</>
  )
}