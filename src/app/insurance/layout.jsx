import localFont from "next/font/local";
import "../globals.css";
import  "bootstrap/dist/css/bootstrap.min.css"

export const metadata = {
    title: "Insurance Component",
    description: "generated in nextjs application",
};

export default function RootLayout({ children }) {
    return (
      <div>
          {children}
      </div>
    );
}