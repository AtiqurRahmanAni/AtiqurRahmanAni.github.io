import Image from "next/image";
import React from "react";
import Section from "@/components/Section";
import { experienceItems } from "@/constant";

const page = () => {
  return (
    <Section heading="Work Experience">
      <div className="mt-4 space-y-7">
        {experienceItems.map((item, idx) => (
          <div key={idx} className="flex items-center flex-col md:flex-row">
            <div className="relative w-[120px] h-[100px] pointer-events-none">
              <Image
                src={item.organizationLogo}
                alt="Institution"
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                quality={100}
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-start">
              <h2 className="text-xl">{item.position}</h2>
              <p className="text-base">{item.department}</p>
              <p className="text-[#52adc8] text-xl font-semibold hover:underline hover:underline-offset-2 hover:text-gray-600 transition-colors duration-200">
                <a href={item.organizationSite} target="_blank">
                  {item.organization}
                </a>
              </p>
              <p className="text-lg">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default page;
