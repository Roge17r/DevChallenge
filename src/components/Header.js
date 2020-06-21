import React from 'react'

export default function Header (){
  return(
    <header>
      <h1>Codar <span>.</span></h1>
    <div>
      <nav>Inicio</nav>
      <nav>Serviços</nav>
      <nav>Contato</nav>
      <nav className="login">Login</nav>
    </div>
    </header>
  )
}