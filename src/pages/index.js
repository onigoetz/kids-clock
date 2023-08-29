"use client";

import React, { useEffect, useState } from "react";
import { isJamesUp, isEliorUp, isAlyssaUp } from "../utils";


function Sun(props) {
  return (
    <svg viewBox="0 0 302.4 302.4" {...props}>
      <path d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zM151.2 51.6c5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4zM236.4 80.8l22-22c4-4 4-10.4 0-14.4s-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10 4 14.4 0zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM236 221.6c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4l-22-22zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM66 221.6l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4-3.6-4-10-4-14.4 0zM51.6 151.2c0-5.6-4.8-10.4-10.4-10.4H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.8 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4zM66 80.8c4 4 10.4 4 14.4 0s4-10.4 0-14.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22z" />
    </svg>
  );
}

function Bed(props) {
  return (
    <svg viewBox="0 0 490.7 490.7" {...props}>
      <path d="M436.2 154.6H182.4c-12.4 0-33.1 4.7-33.1 36.6V240h320v-48.8c0-31.8-20.7-36.6-33.1-36.6z" />
      <path d="M80.3 250.6H32V80H0v330.7h32v-85.4h426.7v85.3h32v-160z" />
      <circle cx={85.3} cy={197.3} r={44.7} />
    </svg>
  );
}

export default function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const hours = date.getHours();
  const minute = date.getMinutes();

  const JamesIcon = isJamesUp(hours, minute) ? Sun : Bed;
  const EliorIcon = isEliorUp(hours, minute) ? Sun : Bed;
  const AlyssaIcon = isAlyssaUp(hours, minute) ? Sun : Bed;

  return (
    <div className="Clock">
      <div className="Digits">
        {("0" + date.getHours()).slice(-2)}
        <span>:</span>
        {("0" + date.getMinutes()).slice(-2)}
      </div>
      <div className="Kids">
        <div className="Kid">
          <JamesIcon /> James
        </div>
        <div className="Kid">
          <EliorIcon /> Elior
        </div>
        <div className="Kid">
          <AlyssaIcon /> Alyssa
        </div>
      </div>
    </div>
  );
}
