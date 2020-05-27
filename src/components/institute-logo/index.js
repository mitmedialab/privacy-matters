import React from "react";
import CivicLogo from "./civic";
import MediaLabLogo from "./media-lab";

import "./style.scss";

const InstituteLogo = (props) => {
  const { institute } = props;
  const institutes = {
    civic: {
      img: (<CivicLogo />),
      url: "https://www.media.mit.edu/groups/civic-media/overview/",
    },
    mediaLab: {
      img: (<MediaLabLogo />),
      url: "https://www.media.mit.edu/",
    }
  }

  return (
    <div className="institute-logo">
      <a
        href={institutes[institute].url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {institutes[institute].img}
      </a>
    </div>
  );
};

export default InstituteLogo;
