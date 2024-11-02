import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PageNave.module.css';

export default function PageNav() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
                <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
                <NavLink to="/product">Product</NavLink>
            </li>
        </ul>
    </nav>
  )
}
