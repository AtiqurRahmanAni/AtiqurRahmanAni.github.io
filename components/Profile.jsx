import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { connectItems } from "@/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Profile = () => {
  return (
    <div className="flex gap-2 flex-row md:flex-col min-w-fit items-center">
      <div className="pointer-events-none relative h-[45px] w-[45px] rounded-full overflow-hidden md:h-[170px] md:w-[170px] md:border-2 md:border-gray-500">
        <Image
          src={profileImg}
          fill
          style={{ objectFit: "cover" }}
          alt="Profile img"
          sizes="(min-width: 808px) 50vw, 100vw"
          priority
          quality={100}
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-600 tracking-wide">
          Md Atiqur Rahman
        </h4>
        <p className="text-[14px] text-gray-500 tracking-tighter lg:mt-1">
          Adjunct Lecturer @ CSE, AUST
        </p>
      </div>
      <div className="self-center ml-4">
        <button className="text-xs text-gray-500 border border-gray-600 p-[4px] rounded-[4px] hover:bg-gray-600 hover:text-white transition-colors duration-200 md:hidden">
          Follow
        </button>
      </div>
      <div className="hidden md:block">
        <ul>
          {connectItems.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-500 mb-1 flex items-center gap-x-2"
            >
              <div className="w-[14px] h-[14px]">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <a
                className="hover:underline underline-offset-1 cursor-pointer"
                href={item.link}
                target="_blank"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
