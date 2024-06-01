"use client";
import { faAngleDown, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AbstractModal from "./AbstractModal";

let abstractText = null;
const Accordion = ({ year, publications }) => {
  const [open, setOpen] = useState(true);
  const [isOpenAbstract, setIsOpenAbstract] = useState(false);

  const onAbstractClick = (text) => {
    abstractText = text;
    setIsOpenAbstract(true);
  };

  const closeAbstractModal = () => {
    setIsOpenAbstract(false);
  };

  return (
    <>
      <div>
        <div
          className="text-gray-600 space-x-2 bg-gray-300/90 pl-8 py-1 rounded-md cursor-pointer z-10"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-[16px] h-[16px] inline-block">
            <FontAwesomeIcon
              icon={faAngleDown}
              className={`w-full h-full transition-transform duration-300 ${
                open ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          <span className="italic">
            <span className="text-lg">{year}</span> ({publications.length})
          </span>
        </div>
        <ul
          className={`overflow-hidden space-y-2 pt-1 transition-max-height duration-300  ${
            open ? "max-h-96" : "max-h-[0px]"
          }`}
        >
          {publications.map((item, idx) => (
            <li
              key={idx}
              className={`font-custom text-gray-600/95 px-4 leading-tight text-[14px text-base/5 md:text-lg/6`}
            >
              <strong>{item.paperTitle}</strong> <span>{item.authors}</span>{" "}
              <span>
                In <span className="italic">{item.conference}</span>,{" "}
                {item.extra}
              </span>
              <div className="flex gap-x-3 font-medium">
                <a
                  href={item.paperLink}
                  target="_blank"
                  className="flex text-sky-600/85 hover:underline"
                >
                  <div className="w-[16px] h-[16px] mr-1">
                    <FontAwesomeIcon icon={faLink} className="w-full h-full" />
                  </div>
                  <span>Link</span>
                </a>
                <span
                  className="flex text-sky-600/85 hover:underline cursor-pointer"
                  onClick={() => onAbstractClick(item.abstract)}
                >
                  Abstract
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AbstractModal
        abstract={abstractText}
        isOpen={isOpenAbstract}
        closeModal={closeAbstractModal}
      />
    </>
  );
};

export default Accordion;
