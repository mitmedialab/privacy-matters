import React from "react";
import { trackClick, EVENTS } from "../../utils/tracking";

const DownloadReport = props => {
  const { report } = props;
  const reports = {
    fullReport: {
      href: "/ltp-full-report.pdf",
      label: "Download full report"
    },
    onePager: {
      href: "/ltp-recommendations.pdf",
      label: "Download recommendations one-pager"
    },
    summary: {
      href: "/ltp-summary.pdf",
      label: "Download report summary"
    },
    prototypingGuide: {
      href: "/ltp-prototyping-guide.pdf",
      label: "Download policy prototyping guide"
    }
  };

  // TODO: remove this when ready to release
  const DISPLAY_LINK = true;
  if (DISPLAY_LINK) {
    return (
      <a
        className="btn btn-secondary mt-3 py-2 px-4"
        rel="noopener noreferrer"
        target="_blank"
        href={reports[report].href}
        onClick={e => trackClick(e, EVENTS[report])}
      >
        {reports[report].label}
      </a>
    );
  } else {
    return <span />;
  }
};

export default DownloadReport;
