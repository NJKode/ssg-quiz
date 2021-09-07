import React from "react";

function PageModule({ title, description, buttons }) {
  return (
    <div className="module-page">
      <div class="header">
        <div class="header-balloon"></div>
        <div class="header-image"></div>
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
