import React from "react"
import { Link } from "gatsby"
import { PageProps } from "gatsby"
import { WindowLocation } from "@reach/router"

const Layout: React.FC<
  { title: string } & { location: WindowLocation<unknown> }
> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header id="header" className="wrapper">
        <h1 className="site-title">
          <a href="index.html">
            <img
              src="/static/9637123cb1d773ed2e70061d58b7927b/logo.svg"
              alt="Profile"
            />
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#bicycle">Bicycle</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer id="footer">
        <p>&copy; 2020 Profile</p>
      </footer>
    </div>
  )
}

export default Layout
