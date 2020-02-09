import { Menu } from "semantic-ui-react";
import { useState, useCallback } from "react";
import {
  Link,
  useLocation
} from "react-router-dom";
import React from 'react'


export default function TopBar() {
  const location = useLocation()
  const [page, setPage] = useState(location.pathname.substr(1) || 'home')
  const handleClick = useCallback((e, { name }) => setPage(name), [])

  return (
    <Menu fixed="top">
      <Menu.Item
        name='home'
        active={page === 'home'}
        onClick={handleClick}
        as={Link}
        to="/"
      >
        Home
      </Menu.Item>

      <Menu.Item
        name='live-charts'
        active={page === 'live-charts'}
        onClick={handleClick}
        as={Link}
        to="/live-charts"
      >
        Live Charts
      </Menu.Item>

      <Menu.Item
        name='query-builder'
        active={page === 'query-builder'}
        onClick={handleClick}
        as={Link}
        to="/query-builder"
      >
        Query Builder
      </Menu.Item>

      <Menu.Item
        name='about'
        active={page === 'about'}
        onClick={handleClick}
        as={Link}
        to="/about"
      >
        About me
      </Menu.Item>
    </Menu>
  )
}