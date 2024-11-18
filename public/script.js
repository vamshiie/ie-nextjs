// script.js (public directory)
import React from "react";
import { hydrateRoot } from "react-dom";
import InsuranceOptions from "../src/app/components/insuranceOptions"; // Path to your client component

document.addEventListener("DOMContentLoaded", () => {
  hydrateRoot(document.getElementById("root"), <InsuranceOptions />);
});
