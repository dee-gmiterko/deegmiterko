import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import "./conversation-message.scss";

const Message = ({ data, contentImages }) => {

  let media = null;
  if ('media' in data && data.media) {
    if (data.media.type === 'image') {
      if (data.media.url.startsWith('https://gatsby-image/')) {
        const imagePath = data.media.url.substr('https://gatsby-image/'.length);
        media = (
          <GatsbyImage image={contentImages[imagePath]} alt={data.media.alt} />
        );
      } else {
        media = (
          <img src={data.media.url} />
        );
      }
    } else if (data.media.type === 'audio') {
      media = (
        <audio controls={true} autoplay={true}>
          <source src={data.media.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
    } if (data.media.type === 'video') {
      media = (
        <video controls={true}>
          <source src={data.media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  }

  return (
    <div className="message-container">
      {
        data.title &&
        <div className="title">
          {data.title}
        </div>
      }
      {
        media &&
        <div className="media">
          {media}
        </div>
      }
      {
        data.message &&
        <div className="message">
          {data.message}
        </div>
      }
      {
        data.website &&
        <div className="website">
          <a href={data.website.url}>
            <p>
              <img src={data.website.imageUrl} alt={data.website.title} />
            </p>
            <p className="website-title">{data.website.title}</p>
            <p className="website-url">{data.website.url}</p>
          </a>
        </div>
      }
    </div>
  );
}

export default Message;
