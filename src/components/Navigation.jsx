import React from "react";
import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <nav style={{textAlign: 'right'}}>
      <Link to="/">Продукты</Link> |&nbsp;<Link to="/about">Об этом</Link>
    </nav>
  )
}