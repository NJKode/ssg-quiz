import React from "react";

function PageModule({ title, description, buttons }) {
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;
  const cr = pageWidth > 600 ? 180 : pageWidth * 0.3;

  return (
    <div className="module-page">
      <svg height={cr * 2 + pageHeight * 0.1} width={pageWidth}>
        <ellipse
          cx={pageWidth / 2}
          cy="0"
          rx={1.08 * pageWidth}
          ry={cr * 1.5 + pageHeight * 0.1}
          fill="#C4C4C4"
        />
        <circle
          cx={pageWidth / 2}
          cy={cr + pageHeight * 0.1}
          r={cr}
          fill="#0500FF"
        />
      </svg>

      <div className="module-text">
        <div className="module-title title">{title}</div>
        <div className="module-description">{description}</div>

        {buttons}
      </div>
    </div>
  );
}

export default PageModule;
