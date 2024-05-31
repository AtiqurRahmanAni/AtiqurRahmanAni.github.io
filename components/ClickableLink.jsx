import React from "react";

const ClickableLink = ({ linkText, link }) => {
  return (
    <span>
      [
      <a
        className="text-[#52adc8] font-semibold hover:underline hover:underline-offset-2"
        href={link}
        target="_blank"
      >
        {linkText}
      </a>
      ]
    </span>
  );
};

export default ClickableLink;
