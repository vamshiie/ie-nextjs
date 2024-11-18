// import { NextResponse } from "next/server";
// import Page from "../insurance/page"; // Adjust path to your component if needed
// import React from "react";

// // Handle GET requests
// export async function GET() {
//   const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Insurance Page</title>
//       </head>
//       <body>
//         <div id="root">${await getServerRenderedHTML()}</div>
//       </body>
//     </html>
//   `;

//   return new Response(htmlContent, {
//     headers: { "Content-Type": "text/html" },
//   });
// }

// // Helper function to render the component as a Server Component
// async function getServerRenderedHTML() {
//   // Render your React component directly
//   return `<div>${Page()}</div>`;
// }



// XXXXXXXXXXXXXXXXXXx
// import { renderToString } from "react-dom/server";
// import InsurancePage from "../insurance/page";

// export async function GET() {
//   // Convert the server component to raw HTML
//   const htmlContent = renderToString(<InsurancePage />);

//   return new Response(`<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charSet="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Insurance Page</title>
//   </head>
//   <body>
//     <div id="root">${htmlContent}</div>
//   </body>
// </html>`, {
//     headers: { "Content-Type": "text/html" },
//   });
// }




// import InsurancePage from "../insurance/page"; // Import the server-rendered component
// import { NextResponse } from "next/server";

// export async function GET() {
//   // Dynamically return the component as a server-rendered HTML response
//   const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Insurance Page</title>
//       </head>
//       <body>
//         <div id="root">${<InsurancePage/>}</div>
//       </body>
//     </html>
//   `;

//   return new NextResponse(htmlContent, {
//     headers: { "Content-Type": "text/html" },
//   });
// }



//>>>>>>>> Not working

// import { NextResponse } from "next/server";
// import React from "react";
// import { renderToString } from "react-dom/server";
// import InsurancePage from "../insurance/page"; // Path to your page component

// export async function GET() {
//   // Convert the InsurancePage React component to raw HTML
//   const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Insurance Page</title>
//       </head>
//       <body>
//         <div id="root">${renderToString(<InsurancePage />)}</div>
//       </body>
//     </html>
//   `;

//   return new NextResponse(htmlContent, {
//     headers: { "Content-Type": "text/html" },
//   });
// }

// co-pilot response - working but returning function

// import { NextResponse } from "next/server";
// import React from "react";
// import InsurancePage from "../insurance/page"; // Path to your page component

// export async function GET() {
//   return new Response(InsurancePage);
// }




// import React from "react";
// import { renderToStaticMarkup } from "react-dom/server";
// import InsurancePage from "../insurance/page"; // Path to your page component

// export async function GET() {
//   const staticMarkup = renderToStaticMarkup(<InsurancePage />);
//   return new Response(staticMarkup, {
//     headers: { "Content-Type": "text/html" },
//   });
// }



// returning object-Object
// import InsurancePage from "../insurance/page"; // Path to your server component

// export async function GET() {
//   return new Response(<InsurancePage />, {
//     headers: { "Content-Type": "text/html" },
//   });
// }



import { renderToReadableStream } from "next/dist/compiled/react-dom/server.browser";
import InsurancePage from "../insurance/page"; // Ensure correct path

export async function GET() {
  const stream = await renderToReadableStream(<InsurancePage />);
  return new Response(stream, {
    headers: { "Content-Type": "text/html" },
  });
}



