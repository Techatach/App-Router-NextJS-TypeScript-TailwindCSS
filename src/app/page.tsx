import React from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="text-center p-10">
      {<Navbar />}
      {<Footer />}
    </div>
  );
}
