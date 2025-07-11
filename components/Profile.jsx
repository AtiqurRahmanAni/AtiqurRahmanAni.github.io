import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { connectItems } from "@/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
const Profile = () => {
  return (
    <div className="md:self-start md:sticky md:top-24 flex gap-2 flex-row md:flex-col min-w-fit md:items-start items-center">
      <div className="pointer-events-none relative h-[45px] w-[45px] rounded-full overflow-hidden md:h-[170px] md:w-[170px] md:border-2 md:border-gray-500">
        <Image
          src={profileImg}
          fill
          style={{ objectFit: "cover" }}
          alt="Profile img"
          sizes="100%"
          priority
          quality={75}
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-600 tracking-wide">
          Md Atiqur Rahman
        </h4>
        <p className="text-[14px] text-gray-500 tracking-tighter lg:mt-1">
          Junior Python Developer, filerskeepers
        </p>
      </div>
      <div className="self-center ml-4">
        <Popover>
          <PopoverButton className="text-xs text-gray-500 border border-gray-600 p-[4px] rounded-[4px] hover:bg-gray-600 hover:text-white transition-colors duration-200 md:hidden">
            Follow
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom end"
              className="bg-white shadow-[0px_1px_5px_4px_rgba(0,0,0,0.40)]"
            >
              <ul className="p-3">
                {connectItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-500 mb-1 flex gap-x-2"
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
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>
      <div className="hidden md:block">
        <ul>
          {connectItems.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-500 mb-1 flex gap-x-2">
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
