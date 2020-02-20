import React from "react";
import Policy from "../components/policy";
import { SMART } from "../constants/policies";

import "bootstrap/dist/css/bootstrap.min.css";

const SmartPage = () => {
  return <Policy policy={SMART} />;
};

export default SmartPage;
