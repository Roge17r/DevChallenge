import React from 'react'

import Image from '../../assets/coding_.png'

export default function Infos (){
  return(
<>
<section>
<div className="info-container">
  <ul>
    <li><span> ✔</span>Domínio personalizado</li>
    <li><span> ✔</span>Hospedagem</li>
    <li><span> ✔</span>Site responsivo</li>
    <li><span> ✔</span>Redes sociais</li>
    <li><span> ✔</span>Chat online</li>
    <li><span> ✔</span>Blog interativo</li>
   
  </ul>
</div>
<div className="image-container">
  <img src={Image} alt=""/>
  </div>
</section>
<h3>Nossa equipe está à disposição!</h3>
<div className="contact">
  <input type="text" placeholder="Celular"/>
  <button> Ligamos para você</button>
</div>
</>
  )
}