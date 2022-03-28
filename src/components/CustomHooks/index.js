import React, { useState, useEffect } from "react";
import axios from "axios";
import useToggle from "./useToggle";
import useWindowSize from "./useWindowSize";
import useRequest from "./useRequest";

export default function CustomHooks() {
  const [toggle, onToggle] = useToggle(false);
  const size = useWindowSize();

  const { data, loading, error } = useRequest(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );

  return (
    <div>
      {toggle ? "Show" : "Hidden"}
      <button onClick={onToggle}>Toggle</button>

      {/* {window.innerWidth > 768 ? <SidebarDesktop /> : <SidebarMobile />} */}
      {size.width > 768 ? <p>Desktop</p> : <p>Mobile</p>}

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && JSON.stringify(data)}
    </div>
  );
}
