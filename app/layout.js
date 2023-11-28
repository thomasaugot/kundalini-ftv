// this page is used to include all the code I want accross the entire app, such as navbar or footer

import "./globals.scss";
import Navbar from "./components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
