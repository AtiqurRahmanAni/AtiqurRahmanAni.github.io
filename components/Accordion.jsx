"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Accordion = ({ year, publications }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div
        className="text-gray-600 space-x-2 bg-gray-300/90 pl-8 py-1 rounded-md cursor-pointer z-10"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
        />
        <span className="italic">
          {year} ({publications.length})
        </span>
      </div>
      <ul
        className={`overflow-hidden space-y-2 pt-1 transition-max-height duration-300  ${
          open ? "max-h-60" : "max-h-[0px]"
        }`}
      >
        {publications.map((item, idx) => (
          <li
            key={idx}
            className={`text-gray-700 px-4 font-serif leading-tight text-[14px]`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
