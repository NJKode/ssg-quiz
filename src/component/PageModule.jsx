import React from "react";

function PageModule({ title, description, buttons, cta }) {
  const button = buttons 
    ? buttons
    : <a className="button button--primary button--title-screen" href={cta.ctaLink}>{cta.ctaText}</a>
  return (
    <div className="module-page">
      <div className="header">
        <div className="header-balloon"></div>
        <div className="header-image">
        </div>
      </div>

      <div className="module-text">
        <div className="module-title title">{title}</div>
        <div className="module-description">{description}</div>
        {button}
      </div>
    </div>
  );
}

export default PageModule;
