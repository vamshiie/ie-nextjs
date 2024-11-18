// "use client";
"use server";

import Image from "next/image";
import React from "react"
// import styles from "../page.module.css";
import InsuranceOptions from '../components/insuranceOptions';

// import dynamic from "next/dynamic";

// const InsuranceOptions = dynamic(() => import("../components/insuranceOptions"), {
//   ssr: false, // Disable server-side rendering for this component

// })

export default async function InsurancePage() {
  return (
    <>
          {/* <nav>
        <Link className="mmr" href="/insurance">Insurance</Link>
        <Link className="mmr" href="/about">About</Link>
      </nav> */}

          {/* <div className="panel-heading insPanel snipcss-novHB">
        <div className="TrLftInfo left ins-text-trans">
          <div className="Travel-New-insurance">
            <Image src="/TravelGuard.png" alt="Next.js logo" width={139} height={20} priority />
            <span className="travelInsuranceText lpl"> Travel Insurance Plan</span>
            <Image className="aig_align" alt="AIG" src="/AIG.png" width={60} height={31} />
          </div>
        </div>
      </div> */}

          <div className="panel-body snipcss-5LFRb">
            <div className="row1 box border-orenge radius5 box-orng pb spt">
              <div className="text-orenge bold md-16">Cover your trip with a travel insurance plan!</div>
              <div className="bold md-13 smt smb">Don&apos;t ignore the Unexpected</div>
              <div className="tipList size12 clearfix">
                <ul className="list-unstyled md-12 mm">
                  <li className="inline-flex smt smb">
                    <div className="travelImg_Icons ins-user ins-icon" /> A family member could get sick...
                  </li>
                  <li className="inline-flex smt smb">
                    <div className="travelImg_Icons ins-flight ins-icon" /> You could miss a flight connection...
                  </li>
                  <li className="inline-flex smt smb">
                    <div className="travelImg_Icons ins-query ins-icon" /> You could lose your passport...
                  </li>
                  <li className="inline-flex smt smb">
                    <div className="travelImg_Icons ins-flight ins-icon" /> Your trip could be delayed...
                  </li>
                  <li className="inline-flex smt smb">
                    <div className="travelImg_Icons ins-brifCase ins-icon" /> Your baggage could be lost...
                  </li>
                  <li className="inline-flex smt smb">
                    <div className="travelImg_Icons ins-dollar ins-icon ins-dollar-w" /> You may need to make last minute hotel accommodations...
                  </li>
                </ul>
              </div>
              <div className="mmt mmr smb">
                Travel Guard&apos;s travel insurance plan can provide financial reimbursement should covered unexpected events occur.
              </div>

              <InsuranceOptions />

              <div className="mmt lmb md-12">
                Coverage is offered by Travel Guard Group, Inc., and limitations will apply.
                <a className="ins-links" href="https://www.travelguard.com/legal/disclaimer" target="_blank">
                  Click here for full disclaimer.
                </a>
              </div>
            </div>
          </div>
    </>
  );
}
