import React from "react";
import Policy from "../components/policy";
import { ONLINE_PRIVACY } from "../constants/policies";

import "bootstrap/dist/css/bootstrap.min.css";

const OpaPage = () => {
  return <Policy policy={ONLINE_PRIVACY} />;
};

export default OpaPage;
