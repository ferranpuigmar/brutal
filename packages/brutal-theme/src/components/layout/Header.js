import { connect } from 'frontity';
import React from 'react'
import Link from "@frontity/components/link"

const Header = () =>
{
  return (
    <header>
      <nav>
        <Link link="/">Home</Link>
        <Link link="/proyectos/paput">Paput</Link>
        <Link link="/hello-world">Hola mundo</Link>
        <Link link="/about">About us</Link>
      </nav>
    </header>
  )
}

export default connect( Header );
