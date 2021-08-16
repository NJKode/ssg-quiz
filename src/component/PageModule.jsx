import React from "react";

function PageModule({ pageWidth, title, description, buttons }) {
  return (
    <div className="module-page">
      <svg height="451px" width={pageWidth}>
        <ellipse
          cx={pageWidth / 2}
          cy="0"
          rx={1.08 * pageWidth}
          ry="312"
          fill="#C4C4C4"
        />
        <circle cx={pageWidth / 2} cy="260" r="191" fill="#0500FF" />
      </svg>

      <div className="module-title">{title}</div>
      <div className="module-description">{description}</div>

      {buttons}
    </div>
  );
}

export default PageModule;
