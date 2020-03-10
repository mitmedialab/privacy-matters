import React from "react";
import Policy from "../components/policy";
import { COPRA } from "../constants/policies";

import "bootstrap/dist/css/bootstrap.min.css";

const CopraPage = () => {
  return <Policy policy={COPRA} />;
};

export default CopraPage;
