"use client";

import { useState } from "react";

export default function InsuranceOptions() {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = (event) => {
      const { checked } = event.target;
      setIsChecked(checked);
      console.log("Checkbox state:", checked);
    };

    const addOrRemoveInsurancePrice = (price, id, event) => {
        const checkbox = event.target;
        // Add logic for adding or removing insurance price based on checkbox state
        console.log("Checkbox checked:", checkbox.checked);
        console.log("Price:", price, "ID:", id);
      };
  
    return (
        <div>
            <div
            className="box-orng2 bg-orenge-tint row lp travelInsuranceInfo smt smb style-vFOhx"
            id="style-vFOhx">
            <div className="checkBox size12">
              <div id="travelInsuranceErrorToolTipMain" className="alert alert-red" />
              <label className="checkbox" htmlFor="travelInsurance">
                <input
                  type="checkbox"
                  id="travelInsurance"
                  name="travelInsuranceName"
                  defaultValue="true"
                  onChange={(event) => addOrRemoveInsurancePrice(50.61, 46, event)}
                />
                <span className="icon smt" />
                <b className="text-blue pull-left md-15 xs-14 smr style-5m7qJ" id="style-5m7qJ">
                  Yes, include a travel insurance plan for <span id="totalFareId-Insurance-USD-1"> $50.61 </span>
                </b>
                <input type="hidden" id="InsuranceAmount1" defaultValue="50.61" />
                <span className="pull-left">
                  (Only available to residents of U.S. states and the District of Columbia.)
                </span>
                <div id="affirm"> </div>
                <div className="covidDiv">
                  <div className="col-xs-12 lml covidRead">
                    By clicking yes, I acknowledge that I have read, understand and agree to the terms and conditions of the
                    <a className="ins-links" href="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode=US&StateCode=AL&ProductCode=109438&PlanCode=P1&FileType=PROD_PLAN_GM" target="_blank"> Policy of Insurance</a> and
                    <a className="ins-links" href="https://www.indianeagle.com/Flights/travelGuard" target="_blank"> Important Required Disclosures.</a>
                    Quoted price for plan includes both insurance premium and fee for travel assistance services.
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="row1 size12 row lpl lpr">
            <label className="checkbox" htmlFor="noTravelInsurance">
              <input
                type="checkbox"
                id="noTravelInsurance"
                name="travelInsuranceName"
                defaultValue="true"
                onChange={(event) => addOrRemoveInsurancePrice(50.61, 46, event)}
              />
              <span className="icon smt" /> No, I decline the option to purchase this travel insurance plan.
            </label>
          </div>
        </div>
    );
}
