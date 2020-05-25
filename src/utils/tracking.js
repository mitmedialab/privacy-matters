import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export const EVENTS = {
  fullReport: "ltp.full-report.download",
  executiveSummary: "ltp.executive-summary.download",
  prototypingGuide: "ltp.prototyping-guide.download",
  onePager: "ltp.one-pager.download"
};

export function trackClick(e, category) {
  trackCustomEvent({
    category,
    action: "click"
  });
}
