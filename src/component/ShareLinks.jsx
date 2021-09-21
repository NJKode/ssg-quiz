import React from "react";

function ShareLinks(ssg) {
  const text = `I'm ${ssg.ssg}! What's your spirit SSG? Find out at @CloudCannon's quiz:`;
  const baseUrl = window.location;
  const facebookUrl = `https://www.facebook.com/sharer.php?u=${baseUrl}`;
  const twitterUrl = `https://twitter.com/share?url=${baseUrl}&text=${text}`;
  const linkedinUrl = `http://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}`;
  return(
    <div className="c-social-block__social-icons">
            
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <div className="cc-helper-hidden">
            Share via facebook
          </div>
          <div className="c-social-block__social-icons-item c-social-block__svg--facebook" aria-hidden="true"></div>
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <div className="cc-helper-hidden">
            Share via linkedin
          </div>
          <div className="c-social-block__social-icons-item c-social-block__svg--linkedin" aria-hidden="true"></div>
        </a>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <div className="cc-helper-hidden">
            Share via twitter
          </div>
          <div className="c-social-block__social-icons-item c-social-block__svg--twitter" aria-hidden="true"></div>
        </a>
               
    </div>
  );
}

export default ShareLinks;