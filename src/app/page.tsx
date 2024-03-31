import React from "react";
import Main from "./main/page";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="text-center p-10">
      {<Main/>}
    </div>
  );
}
