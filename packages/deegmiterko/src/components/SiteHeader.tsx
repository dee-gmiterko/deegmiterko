import React, { FunctionComponent, useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import { books, bookPath } from "../content/books";

const SiteHeader: FunctionComponent<{
  current?: string;
}> = ({ current }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        Dee Gmiterko
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </button>
      <div id="site-menu" className={clsx("menu", open && "open")}>
        <nav aria-label="Pages">
          <ul>
            {books.map(({ id, title }) => (
              <li key={id}>
                <Link
                  to={bookPath(id)}
                  className={clsx("nav-link", id === current && "current")}
                  aria-current={id === current ? "page" : undefined}
                  onClick={close}
                >
                  {id === current && (
                    <FontAwesomeIcon
                      icon={faCaretLeft}
                      className="current-marker"
                    />
                  )}
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="contact-link">
          <AnchorLink
            to="/#contact"
            className="nav-link"
            onAnchorLinkClick={close}
          >
            Contact
          </AnchorLink>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
