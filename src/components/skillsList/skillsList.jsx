import React from 'react'
import "./skillsList.scss"

export default function skillsList({ id, title, active, setSelected }) {
  return (
    <li
    className={active ? "skillsList active" : "skillsList"}
    onClick={() => setSelected(id)}
  >
    {title}
  </li>
    
  );
}
