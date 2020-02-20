import React from "react";
import Policy from "../components/policy";
import { CORPA } from "../constants/policies";

import "bootstrap/dist/css/bootstrap.min.css";

const CorpaPage = () => {
  return <Policy policy={CORPA} />;
};

export default CorpaPage;
