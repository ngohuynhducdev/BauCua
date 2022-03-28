import React, { useState } from "react";

export default function useToggle(initValue = false) {
  const [toggle, setToggle] = useState(initValue)

  const onToggle = () => {
    setToggle(!toggle)
  }

  return [toggle, onToggle];
}
