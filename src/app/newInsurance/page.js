// InsurancePage.server.js
"use server";
import React from "react";

export default function InsurancePage() {
  return (
    <html>
      <head>
        <title>Insurance Page</title>
        <link rel="stylesheet" href="/path/to/your/styles.css" />
        <script src="../../public/script.js" defer></script>
      </head>
      <body>
        <div>Your static content here</div>
        <div id="root"></div> {/* Placeholder for client-side component */}
      </body>
    </html>
  );
}
