import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import useApp from "../hooks/useApp";

const Contact = () => {
  const { bookPageSize } = useApp();

  return (
    <div className="contact" style={{ maxWidth: bookPageSize }}>
      <h2 id="contact">Contact</h2>
      <div className="last-words conversation">
        <div className="sequence mine">
          <div className="sequence-messages">
            <div className="message-container">
              <div className="message">
                <i>You can start your very own conversation with me...</i>
              </div>
            </div>
            <div className="message-container">
              <div className="message">
                Feel free to reach out to me at your preferred platform 😊
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-list">
        <dl>
          <dd>Dominik Gmiterko</dd>

          <dt>Email</dt>
          <dd>
            <OutboundLink href="mailto:me@deegmiterko.com">
              me@deegmiterko.com
            </OutboundLink>
          </dd>

          <dt>Messenger</dt>
          <dd>
            <OutboundLink href="https://m.me/dee.gmiterko">
              m.me/dee.gmiterko
            </OutboundLink>
          </dd>

          <dt>Instagram</dt>
          <dd>
            <OutboundLink href="https://instagram.com/dee.gmiterko">
              @dee.gmiterko
            </OutboundLink>
          </dd>

          <dt>LinkedIn</dt>
          <dd>
            <OutboundLink href="https://www.linkedin.com/in/dominik-gmiterko/">
              dominik-gmiterko
            </OutboundLink>
          </dd>

          <dt>Discord</dt>
          <dd>
            <OutboundLink href="https://discord.gg/discord-townhall">
              dee.gmiterko
            </OutboundLink>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Contact;
