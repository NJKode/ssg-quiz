import React from "react";

function PageModule({ title, description, buttons }) {
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

        {buttons}
      </div>
    </div>
  );
}

export default PageModule;
