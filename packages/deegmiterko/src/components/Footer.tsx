import moment from "moment";
import React, { FunctionComponent } from "react";
import { SiteMetadata } from "../types";

type FooterType = {
  siteMetadata: SiteMetadata;
}

const Footer: FunctionComponent<FooterType> = ({ siteMetadata }) => {
  return (
    <footer className="footer" id="footer">
      © {moment().year()} {siteMetadata.author}
    </footer>
  );
}

export default Footer;
