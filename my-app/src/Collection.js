import React, { useState } from "react";
//import Description from "./Description"
import { useLoaderData } from "react-router-dom";

function Collection() {
  const data = useLoaderData();

  return console.log(data);
}

export default Collection;
